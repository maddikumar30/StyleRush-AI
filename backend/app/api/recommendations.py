from fastapi import APIRouter

router = APIRouter()

@router.post("/recommend-outfit")
def recommend_outfit(shirt_color: str):

    recommendations = {
        "black": {
            "pants": ["Blue Jeans", "Beige Chinos", "Grey Pants"],
            "shoes": ["White Sneakers", "Black Sneakers"],
            "score": 96
        },
        "white": {
            "pants": ["Black Jeans", "Navy Jeans"],
            "shoes": ["White Sneakers"],
            "score": 95
        },
        "blue": {
            "pants": ["Black Jeans", "Grey Pants"],
            "shoes": ["White Sneakers", "Loafers"],
            "score": 93
        }
    }

    return recommendations.get(
        shirt_color.lower(),
        {
            "message": "No recommendations found"
        }
    )