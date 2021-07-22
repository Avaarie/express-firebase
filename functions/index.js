const functions = require("firebase-functions");
const express = require("express");
const validator = require("email-validator");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/hello", (req, res, next)=>{
  res.send("Welcome to FIRIEIEE");
});
app.post("/emailValidate", (req, res, next)=>{
  const postData = req.body;
  if(postData.email){
    res.json({"status": validator.validate(postData.email)});
  } else {
    res.status(500).json({"status": "wrongngngngngng"})
  }
});
app.listen(PORT, ()=>{
  console.info("Server is running on PORT", PORT);
});
exports.app = functions.https.onRequest(app);
