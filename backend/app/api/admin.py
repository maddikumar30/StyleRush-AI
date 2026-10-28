from fastapi import APIRouter

router = APIRouter()

products = []

@router.post("/admin/product")
def add_product(name: str, price: float):
    product = {
        "id": len(products) + 1,
        "name": name,
        "price": price
    }

    products.append(product)

    return {
        "message": "Product added successfully",
        "product": product
    }

@router.get("/admin/products")
def get_all_products():
    return products