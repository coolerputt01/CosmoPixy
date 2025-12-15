from flask_jwt_extended import JWTManager,jwt_required,create_access_token,get_jwt_identity
from ..config import db
from .models import User
from flask_bcrypt import Bcrypt
from flask import Blueprint,request,jsonify

auth_bp = Blueprint("auth", __name__)
bcrypt = Bcrypt()

@auth_bp.route("/signup",methods=["POST"])
def signup():
    data = request.get_json()

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

@auth_bp.route("/signin",methods=["POST"])
def signin():
    data = request.get_json()

    if not data:
        return jsonify({"msg": "Missing JSON body in request"}), 400

    email, password = (
        data.get("email"),
        data.get("password"),
    )
    if not email or not password:
        return jsonify({"msg": "All fields are required"}), 400

    user = User.query.filter_by(email=email).first()

    if not user or not bcrypt.check_password_hash(user.password, password):
        return jsonify({"msg": "Invalid credentials"}), 401

    access_token = create_access_token(identity=user.id)
    return jsonify({"pixel_virus":access_token})
