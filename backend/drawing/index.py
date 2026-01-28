from flask import Blueprint,request,jsonify
from auth.models import User
from .models import ColorPalette
from config import db
import random

drawing_bp = Blueprint("drawing",__name__)

@drawing_bp.route("/create-palette",methods=["POST"])
def create_palette():
    data = request.get_json()

    if not data:
        return jsonify({"error":"No valid color palette."}),400
    
    colors = data.get("colors")
    user_id = data.get("user_id")
    name = data.get("name")
    if not name:
        name = "Color Palette" + random.randint(1,100)

    user = User.query.get(user_id)
    new_palette = ColorPalette(
        name=name,
        user=user,
        user_id=user_id,
        colors=colors,

    )

    db.session.add(new_palette)
    db.session.commit()