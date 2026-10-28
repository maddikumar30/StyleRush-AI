from fastapi import APIRouter

router = APIRouter()

orders = [
    {
        "id": 1,
        "product": "Black Oversized T-Shirt",
        "price": 799,
        "status": "Delivered"
    },
    {
        "id": 2,
        "product": "Blue Jeans",
        "price": 1499,
        "status": "Out for Delivery"
    }
]

@router.get("/history")
def get_order_history():
    return orders