const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

///app.post calculator
app.post("/", function(req, res){

var num1 = Number(req.body.n1);
var num2 = Number(req.body.n2);

var result = num1 + num2;

  res.send("The result of the calculation is " + result);
});

//app.et BMI Calculator
app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

//bmicalculator
app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = weight/(height*height);
  res.send("The result of the calculation is " + bmi);
});
//app.listen
app.listen(3000, function(){
  console.log("server started on port 3000")
});
