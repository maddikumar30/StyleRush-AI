from fastapi import APIRouter

router = APIRouter()

recommendations = {
    "black": {
        "shirt": "Black Oversized T-Shirt",
        "pant": "Light Blue Jeans",
        "shoes": "White Sneakers"
    },
    "white": {
        "shirt": "White Polo Shirt",
        "pant": "Black Jeans",
        "shoes": "Black Sneakers"
    },
    "blue": {
        "shirt": "Blue Casual Shirt",
        "pant": "Black Jeans",
        "shoes": "White Sneakers"
    }
}

@router.get("/stylist")
def ai_stylist(color: str):
    color = color.lower()

    if color in recommendations:
        return recommendations[color]

    return {
        "message": "No recommendation found."
    }