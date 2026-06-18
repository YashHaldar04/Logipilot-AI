from flask import (
    Flask,
    render_template,
    request
)

from modules.predict import predict_hs

app = Flask(__name__)

@app.route("/")
def dashboard():
    return render_template("dashboard.html")


@app.route("/emergency")
def emergency():
    return render_template("emergency_transport.html")




@app.route("/delay")
def delay():
    return render_template("delay_predictor.html")


@app.route("/risk")
def risk():
    return render_template("risk_assessment.html")

@app.route(
    "/hs",
    methods=["GET", "POST"]
)
def hs():

    results = None

    if request.method == "POST":

        product = request.form["product"]

        results = predict_hs(product)

    return render_template(
        "hs_classifier.html",
        results=results
    )

if __name__ == "__main__":
    app.run(debug=True)