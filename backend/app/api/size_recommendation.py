from fastapi import APIRouter

router = APIRouter()

@router.post("/recommend-size")
def recommend_size(height: int, weight: int):

    if height >= 175 and weight >= 75:
        size = "XL"
    elif height >= 170 and weight >= 65:
        size = "L"
    elif height >= 165 and weight >= 55:
        size = "M"
    else:
        size = "S"

    return {
        "recommended_size": size
    }