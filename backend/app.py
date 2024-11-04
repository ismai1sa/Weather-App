from flask import Flask,request,jsonify
from flask import Flask
import requests

import http.client

from flask_cors import CORS

url = "https://weatherapi-com.p.rapidapi.com/current.json"
headers = {
    'x-rapidapi-key': "f97187c0c4mshce351ef953b6227p17d64ejsnbd1306bdd577",
    'x-rapidapi-host': "weatherapi-com.p.rapidapi.com"
}

app = Flask(__name__)
CORS(app)
@app.route("/search",methods=['POST'])
def search():
     city=request.form['city']
     response=requests.get(url,headers=headers,params={"q":city})
     if response.status_code == 200 :
        data = response.json()
        return data
     else: 
        'Bad Request'

if __name__ == "__main__":
     app.run(host='0.0.0.0', port=5000,debug=True)
