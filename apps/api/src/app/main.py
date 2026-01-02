"""
EK-SMS API - Main Application Entry Point
"""

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core import settings, init_db, close_db, init_redis, close_redis


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan manager.

    Handles startup and shutdown events.
    """
    # Startup
    print(f"Starting EK-SMS API in {settings.python_env} mode...")

    # Initialize Redis
    try:
        await init_redis()
        print("✓ Redis connected")
    except Exception as e:
        print(f"✗ Redis connection failed: {e}")
        if settings.is_production:
            raise

    # In development, we might want to create tables
    # In production, always use Alembic migrations
    if settings.is_development:
        try:
            await init_db()
            print("✓ Database connected")
        except Exception as e:
            print(f"✗ Database connection failed: {e}")

    yield  # Application runs here

    # Shutdown
    print("Shutting down EK-SMS API...")
    await close_redis()
    await close_db()
    print("✓ Cleanup complete")


app = FastAPI(
  title="EK-SMS API",
  description="EL-KENDEH Smart School Management System API",
  version="0.1.0",
  docs_url="/docs",
  redoc_url="/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/", tags=["Root"])
async def root() -> dict[str, str]:
    """Root endpoint - API welcome message."""
    return {
        "message": "Welcome to EK-SMS API",
        "status": "running",
        "environment": settings.python_env,
    }


@app.get("/health", tags=["Health"])
async def health_check() -> dict[str, str]:
    """Health check endpoint for container orchestration."""
    return {"status": "healthy"}


@app.get("/ready", tags=["Health"])
async def readiness_check() -> dict[str, str]:
    """
    Readiness check endpoint.

    Verifies database and Redis connections.
    """
    # TODO: Add actual connection checks
    return {"status": "ready"}
