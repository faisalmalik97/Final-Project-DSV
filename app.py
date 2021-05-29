from flask import Flask, jsonify, render_template, redirect



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

if __name__ == "__main__":
    app.run(debug=True)


