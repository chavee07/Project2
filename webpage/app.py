import pandas as pd
import sqlite3
from sqlalchemy.orm import Session
import pprint
from flask import Flask, request, render_template, jsonify, current_app

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

                   
#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return render_template('index.html')

@app.route("/landing")
def names():
    #################################################
    # Database Setup
    #################################################
    con = sqlite3.connect("../data/project2.sqlite")
    test_run = pd.read_sql_query("SELECT * from df", con)

    # Convert list of tuples into normal list
    data = test_run.to_json()

    # return current_app.response_class(json.dumps(data))

    return jsonify(data)

@app.route("/maps")
def maps():
    return render_template('maps.html')

@app.route("/bar")
def bar():
    return render_template('bar.html')

@app.route("/bubble")
def bubble():
    return render_template('bubble.html')


@app.route("/gauge")
def gauge():
    return render_template('gauge.html')




if __name__ == '__main__':
    app.run(debug=True)