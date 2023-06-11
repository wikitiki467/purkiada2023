import json
import datetime
import hashlib

from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)

CORS(app)

def binToDec(binary):
  if not isBinary(binary):
    return "invalid binary"
  return int(binary, 2)

def isBinary(string):
  for char in string:
    if char != "0" and char != "1":
      return False
  return True



@app.route("/", methods=["PUT", "GET"])
def post():
  if request.method == "PUT":
    body: dict = request.json

    with open("data.json") as f:
      data = json.load(f)
      user = body["username"]
      securityHash = str(user + body["level"] + "weebhub")
      securityHash = hashlib.sha256(securityHash.encode()).hexdigest()
      if securityHash != body["hash"]:
        return f"authentication failed\n{securityHash}\n{body['hash']}"
      dataDict = {
          "level": binToDec(body["level"]),
          "date": datetime.datetime.now().strftime("%d/%m/%Y %H:%M:%S"),
          # "hash": hashlib.sha256(securityHash.encode()).hexdigest()
        }
      # check if user exists
      if user in data:
        data[user].append( dataDict )
      else:
        data[user] = [ dataDict ]

    with open("data.json", "w") as f:
      json.dump(data, f)

    return "PUT request received"
  if request.method == "GET":
    with open("data.json") as f:
      data = json.load(f)
    return jsonify(data)


if __name__ == "__main__":
  app.run(debug=True, ssl_context=("cert.pem", "key.pem"))
