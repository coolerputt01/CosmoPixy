from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt
from config import initConfigs,db

app = Flask(__name__)

initConfigs(app)
db.init_app(app)


@app.route('/',methods=["GET"])
def home():
    return jsonify(
        {"msg":"Welcome to ComsoPixy"}
    ),200

with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
