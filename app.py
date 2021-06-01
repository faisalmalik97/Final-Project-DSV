from flask import Flask, jsonify, render_template, redirect, url_for



#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Code
#################################################
import numpy as np
import pandas as pd
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt
import datetime
plt.style.use('bmh')
from pandas import DataFrame
from pandas import Grouper
from matplotlib import pyplot
from pandas import read_csv

# #read the csv file
# df = pd.read_csv('APT.csv',index_col="Date", parse_dates=True)
# df.head()

# # plot the historic data
# plt.figure(figsize=(16,8))
# plt.title('APT ASX Stock Price', fontsize = 18)
# plt.xlabel('Days', fontsize= 18)
# plt.ylabel('Close Price AUD ($)', fontsize = 18)
# plt.plot(df['Close'])
# plt.show()

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


