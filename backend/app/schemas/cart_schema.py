from pydantic import BaseModel


class CartCreate(BaseModel):
    product_id: int
    quantity: int = 1


class ProductInCart(BaseModel):
    id: int
    name: str
    description: str
    category: str
    image: str
    price: float

    model_config = {
        "from_attributes": True
    }


class CartResponse(BaseModel):
    id: int
    user_id: int
    product_id: int
    quantity: int
    product: ProductInCart

    model_config = {
        "from_attributes": True
    }