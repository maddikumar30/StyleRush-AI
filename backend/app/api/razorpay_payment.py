from fastapi import APIRouter

router = APIRouter()

@router.post("/create-payment")
def create_payment(amount: int):
    return {
        "message": "Payment order created",
        "amount": amount,
        "currency": "INR"
    }