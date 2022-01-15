#import necessary libraries
from flask import flask, render_template

#app = flask(__name__)

#create route that renders index.html template 
@app.route("/")
def echo():
    return render_template("index.html")


if__name__ == "__main__":
    app.run(debug=True)
    