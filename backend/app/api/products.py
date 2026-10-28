from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.database import get_db
from app.schemas.product_schema import ProductCreate
from app.crud.product_crud import create_product, get_products

router = APIRouter()

@router.post("/products")
def add_product(
    product: ProductCreate,
    db: Session = Depends(get_db)
):
    return create_product(db, product)


@router.get("/products")
def all_products(
    db: Session = Depends(get_db)
):
    return get_products(db)