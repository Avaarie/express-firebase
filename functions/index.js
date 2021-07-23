const functions = require("firebase-functions");
const express = require("express");
const validator = require("email-validator"); 
const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.get("/hello", (req, res)=>{
  console.info("GET /hello success");
  res.send("Welcome to FIRIEIEE");
});
app.post("/emailValidate", (req, res)=>{
  const postData = req.body;
  if (postData.email) {
    console.info("POST /emailValidate success1");
    res.json({"status": validator.validate(postData.email)});
  } else {
    console.warn("POST /emailValidate wrong input");
    res.status(400).json({"status": "wrongngngngngng"});
  }
});
app.listen(PORT, ()=>{
  console.info("Server is running on PORT", PORT);
});
exports.app = functions.https.onRequest(app);
