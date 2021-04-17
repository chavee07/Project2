import pandas as pd
import sqlite3
from sqlalchemy.orm import Session
import pprint
from flask import Flask, request, render_template, json, current_app

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

    return current_app.response_class(json.dumps(data))

if __name__ == '__main__':
    app.run(debug=True)