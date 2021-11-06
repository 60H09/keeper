const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blogDB", { useUnifiedTopology: true , useNewUrlParser: true }) //mongoose connecting
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));



app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(5000, function(){
    console.log("listening @ 5k")
})