import pandas as pd
import sqlite3
from sqlalchemy.orm import Session
  
from flask import Flask, request, render_template, jsonify

#################################################
# Database Setup
#################################################
con = sqlite3.connect("../data/project2.sqlite")
test_run = pd.read_sql_query("SELECT * from WorldHappiness", con)

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

@app.route("/api/v1.0/landing")
def names():

    



    print(test_run)

    # Convert list of tuples into normal list
    all_names = test_run.to_json()

    return jsonify(all_names)

if __name__ == '__main__':
    app.run(debug=True)