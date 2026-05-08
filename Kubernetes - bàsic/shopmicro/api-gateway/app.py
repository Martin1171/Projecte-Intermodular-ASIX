from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
import requests

app = Flask(__name__)

# CORS global correcto
CORS(app)

PRODUCT_URL = "http://product-service:5000"
ORDER_URL = "http://order-service:5001"


# Helper de respuesta con CORS siempre
def cors_response(data, status=200):
    resp = make_response(jsonify(data), status)
    resp.headers["Access-Control-Allow-Origin"] = "*"
    return resp


@app.route("/products", methods=["GET"])
def products():
    try:
        r = requests.get(f"{PRODUCT_URL}/products", timeout=5)
        return cors_response(r.json())
    except Exception as e:
        return cors_response({"error": str(e)}, 500)


@app.route("/orders", methods=["GET"])
def get_orders():
    try:
        r = requests.get(f"{ORDER_URL}/orders", timeout=5)
        return cors_response(r.json())
    except Exception as e:
        return cors_response({"error": str(e)}, 500)


@app.route("/orders", methods=["POST"])
def create_order():
    data = request.get_json()

    response = requests.post(
        "http://order-service:5001/orders",
        json=data
    )

    return response.json(), response.status_code


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
