from flask import Blueprint, jsonify

products_bp = Blueprint("products", __name__)

@products_bp.route("/products", methods=["GET"])
def get_products():

    products = [
        {
            "id": 1,
            "name": "Laptop",
            "price": 50000,
            "image": "https://up.yimg.com/ib/th/id/OIP.bjEigwIH7kYemIIYwmjF_QHaGT?pid=Api&rs=1&c=1&qlt=95&w=128&h=109"
        },
        {
            "id": 2,
            "name": "Phone",
            "price": 20000,
            "image": "https://c7.alamy.com/comp/2G2ENWE/google-pixel-4a-smartphone-with-box-on-white-background-new-york-new-york-usa-05152021-2G2ENWE.jpg"
        },
        {
            "id": 3,
            "name": "Headphones",
            "price": 5000,
            "image": "https://tse2.mm.bing.net/th/id/OIP.8BBa2sEoBp7jyQgovPXWJQHaEn?pid=Api&h=220&P=0"
        }
    ]

    more_products = [
        {
            "id": 4,
            "name": "MacBook Pro",
            "price": 180000,
            "image": "https://tse2.mm.bing.net/th/id/OIP.jw-hh-7JWvedyEv-2qekaQHaE3?pid=Api&h=220&P=0"
        },
        {
            "id": 5,
            "name": "iPhone 15",
            "price": 120000,
            "image": "https://www.livemint.com/lm-img/img/2023/09/12/original/iphone_15_colurs_1694541091519.jpg"
        },
        {
            "id": 6,
            "name": "AirPods",
            "price": 25000,
            "image": "https://up.yimg.com/ib/th/id/OIP.WmrDAbmUFGD_R8LbuO5nRQHaEK?pid=Api&rs=1&c=1&qlt=95&w=173&h=97"
        },
        {
            "id": 7,
            "name": "Gaming Mouse",
            "price": 4500,
            "image": "https://up.yimg.com/ib/th/id/OIP.OdyWZHCjoUVFF4YZFQ77AQHaE7?pid=Api&rs=1&c=1&qlt=95&w=162&h=107"
        },
        {
            "id": 8,
            "name": "Mechanical Keyboard",
            "price": 9000,
            "image": "https://tse3.mm.bing.net/th/id/OIP.3OQnnQwF6QZJBlcota34VQHaFn?pid=Api&h=220&P=0"
        },
        {
            "id": 9,
            "name": "Gaming Pad",
            "price": 3000,
            "image": "https://up.yimg.com/ib/th/id/OIP.Y1lbanysqX2mg8pMifOi1wHaEK?pid=Api&rs=1&c=1&qlt=95&w=209&h=117"
        }
    ]

    # ✅ COMBINE BOTH LISTS
    all_products = products + more_products

    return jsonify(all_products)