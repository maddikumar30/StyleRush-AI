from fastapi import APIRouter

router = APIRouter()

@router.get("/track/{order_id}")
def track_order(order_id: int):
    return {
        "order_id": order_id,
        "status": "Out for Delivery",
        "estimated_delivery_time": "10 minutes",
        "delivery_partner": "Ravi"
    }