from fastapi import APIRouter

router = APIRouter()

@router.get("/profile")
def get_profile():
    return {
        "name": "Maddi Kumar",
        "email": "maddi@gmail.com",
        "phone": "9876543210",
        "city": "Vizianagaram"
    }