from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def dashboard():
    return render_template("dashboard.html")


@app.route("/emergency")
def emergency():
    return render_template("emergency_transport.html")


@app.route("/hs")
def hs():
    return render_template("hs_classifier.html")


@app.route("/delay")
def delay():
    return render_template("delay_predictor.html")


@app.route("/risk")
def risk():
    return render_template("risk_assessment.html")


if __name__ == "__main__":
    app.run(debug=True)