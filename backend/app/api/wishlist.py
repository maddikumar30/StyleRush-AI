from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()

wishlist_items = []

class WishlistItem(BaseModel):
    product_id: int

@router.post("/wishlist/add")
def add_to_wishlist(item: WishlistItem):
    wishlist_items.append(item.dict())

    return {
        "message": "Product added to wishlist",
        "wishlist": wishlist_items
    }

@router.get("/wishlist")
def get_wishlist():
    return wishlist_items

@router.delete("/wishlist/{product_id}")
def remove_from_wishlist(product_id: int):
    global wishlist_items

    wishlist_items = [
        item for item in wishlist_items
        if item["product_id"] != product_id
    ]

    return {
        "message": "Product removed from wishlist"
    }