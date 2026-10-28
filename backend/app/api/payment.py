from fastapi import APIRouter

router = APIRouter()

@router.post("/payment")
def make_payment(amount: float):
    return {
        "status": "success",
        "amount": amount,
        "payment_method": "UPI",
        "transaction_id": "TXN123456789"
    }