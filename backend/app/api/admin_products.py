from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/admin")

products = [
    {
        "id": 1,
        "name": "Black Oversized T-Shirt",
        "price": 799,
        "category": "T-Shirts"
    }
]

class Product(BaseModel):
    name: str
    price: int
    category: str

@router.get("/products")
def get_products():
    return products

@router.post("/products")
def add_product(product: Product):
    new_product = {
        "id": len(products) + 1,
        **product.dict()
    }

    products.append(new_product)

    return {
        "message": "Product added successfully",
        "product": new_product
    }

@router.delete("/products/{product_id}")
def delete_product(product_id: int):
    global products

    products = [
        p for p in products
        if p["id"] != product_id
    ]

    return {
        "message": "Product deleted successfully"
    }