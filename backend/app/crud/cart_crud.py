from sqlalchemy.orm import Session

from app.models.cart import Cart
from app.schemas.cart_schema import CartCreate


def add_to_cart(db: Session, cart: CartCreate):

    db_cart = Cart(
        user_id=cart.user_id,
        product_id=cart.product_id,
        quantity=cart.quantity
    )

    db.add(db_cart)
    db.commit()
    db.refresh(db_cart)

    return db_cart


def get_cart(db: Session, user_id: int):

    return (
        db.query(Cart)
        .filter(Cart.user_id == user_id)
        .all()
    )