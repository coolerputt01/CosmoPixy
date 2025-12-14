from flask_jwt_extended import JWTManager,jwt_required,create_access_token,get_jwt_identity
from ..config import db
from .models import User
from flask_bcrypt import Bcrypt
from flask import Blueprint,request,jsonify

auth_bp = Blueprint("auth", __name__)
bcrypt = Bcrypt()

@auth_bp.route("/signup",methods=["POST"])
def signup():
    data = request.json

    if not data:
        return jsonify({"msg": "Missing JSON body in request"}), 400

    email, password, username = (
        data.get("email"),
        data.get("password"),
        data.get("username"),
    )

    if not email or not password or not username:
        return jsonify({"msg": "All fields are required"}), 400

    if User.query.filter_by(email=email).first():
        return jsonify({"msg":"Sorry, email already exists"}),400
    if User.query.filter_by(username=username).first():
        return jsonify({"msg":f"Sorry, username {username} already exists"}),400

    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    user = User(username=username,password=hashed_password,email=email)

    db.session.add(user)
    db.session.commit()

    return jsonify({"msg":"User was successfully created"}),201