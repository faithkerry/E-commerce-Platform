from flask_cors import CORS
from flask import Flask
from flask_jwt_extended import JWTManager
from flask_migrate import Migrate
from dotenv import load_dotenv
import os

from extensions import db
from routes.auth import auth_bp
from routes.products import products_bp

load_dotenv()

jwt = JWTManager()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)

    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY")

    db.init_app(app)
    jwt.init_app(app)
    migrate.init_app(app, db)

    # 🔥 THIS LINE IS CRITICAL
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(products_bp)

    @app.route("/")
    def home():
        return {"message": "API running"}

        
        
    return app


app = create_app()