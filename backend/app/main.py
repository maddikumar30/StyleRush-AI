from app.models.cart import Cart
from app.api.admin_products import router as admin_products_router
from app.api.history import router as history_router
from app.api.profile import router as profile_router
from app.api.wishlist import router as wishlist_router
from app.api.razorpay_payment import router as razorpay_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database
from app.database.database import engine
from app.database.base import Base

# Models
from app.models.user import User
from app.models.product import Product
from app.models.order import Order

# Routers
from app.api.users import router as user_router
from app.api.products import router as product_router
from app.api.recommendations import router as recommendation_router
from app.api.cart import router as cart_router
from app.api.orders import router as order_router
from app.api.size_recommendation import router as size_router
from app.api.tracking import router as tracking_router
from app.api.stylist import router as stylist_router
from app.api.payment import router as payment_router
from app.api.admin import router as admin_router


# Create FastAPI app
app = FastAPI(
    title="StyleRush AI Backend",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Create database tables

from app.database.database import engine
from app.database.base import Base

# Register routers
app.include_router(user_router)
app.include_router(product_router)
app.include_router(recommendation_router)
app.include_router(cart_router)
app.include_router(order_router)
app.include_router(size_router)
app.include_router(tracking_router)
app.include_router(stylist_router)
app.include_router(payment_router)
app.include_router(admin_router)
app.include_router(razorpay_router)
app.include_router(wishlist_router)
app.include_router(profile_router)
app.include_router(history_router)
app.include_router(admin_products_router)
# Home endpoint
@app.get("/")
def home():
    return {
        "message": "Welcome to StyleRush AI Backend"
    }