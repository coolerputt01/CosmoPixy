from datetime import datetime, timezone
from config import db

class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    username = db.Column(db.String(128),unique=True, nullable=False)
    snap = db.Column(db.String(700),nullable=True)
    bio = db.Column(db.String(300),nullable=True)
    palettes = db.relationship("ColorPalette", back_populates="user")