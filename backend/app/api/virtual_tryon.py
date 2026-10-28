from fastapi import APIRouter

router = APIRouter()

@router.post("/virtual-tryon")
def virtual_tryon(shirt_color: str, pant_color: str):
    return {
        "shirt": shirt_color,
        "pant": pant_color,
        "recommended_shoes": "White Sneakers",
        "match_score": 97
    }