from datetime import datetime
from config import db

class ColorPalette(db.Model):
    __tablename__ = "color_palette"
    id = db.Column(db.Integer,primary_key=True)
    name = db.Column(db.String(255),nullable=True)
    user_id = db.Column(db.Integer,db.ForeignKey("users.id"),nullable=False)
    user = db.relationship("User",back_populates="color_palette")
    created_at = db.Column(db.DateTime,default=datetime.utcnow)
    colors = db.Column(db.Text,nullable=False)