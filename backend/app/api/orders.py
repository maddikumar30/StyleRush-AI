from fastapi import APIRouter

router = APIRouter()

orders = []

@router.post("/orders")
def place_order():
    order = {
        "order_id": len(orders) + 1,
        "status": "Order Placed"
    }

    orders.append(order)

    return order

@router.get("/orders")
def get_orders():
    return orders