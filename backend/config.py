from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def initConfigs(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///main.db"
    app.config["JWT_SECRET_KEY"] = "jwt_secret_key"
    app.config["JWT_ACCESS_TOKEN_EXPIRES"] = False
