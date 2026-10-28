from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.core.auth import get_current_user

from app.schemas.cart_schema import CartCreate, CartResponse
from app.crud.cart_crud import add_to_cart, get_cart


router = APIRouter()


@router.post(
    "/cart/add",
    response_model=CartResponse
)
def cart_add(
    cart: CartCreate,
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user)
):
    # Never trust user_id sent by the client
    cart.user_id = current_user_id

    return add_to_cart(db, cart)


@router.get(
    "/cart",
    response_model=list[CartResponse]
)
def view_cart(
    db: Session = Depends(get_db),
    current_user_id: int = Depends(get_current_user)
):
    return get_cart(db, current_user_id)