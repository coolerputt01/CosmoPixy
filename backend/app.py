from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager
from .config import initConfigs,db
from .auth.auth import auth_bp,bcrypt

app = Flask(__name__)

initConfigs(app)
db.init_app(app)
bcrypt.init_app(app)
jwt = JWTManager(app);

app.register_blueprint(auth_bp, url_prefix="/auth")
@app.route('/',methods=["GET"])
def home():
    return jsonify(
        {"msg":"Welcome to ComsoPixy"}
    ),200


with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)
