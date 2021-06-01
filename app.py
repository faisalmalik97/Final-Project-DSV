from flask import Flask, jsonify, render_template, redirect, url_for



#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

# create route that renders index.html template
@app.route("/")
def echo():
    return render_template("index.html", text="Serving up cool text from the Flask server!!")

@app.route("/addtwo/<number>")
def addTwo(number):
    newNumber = int(number)+2
    return str(newNumber)


if __name__ == "__main__":
    app.run(debug=True)


