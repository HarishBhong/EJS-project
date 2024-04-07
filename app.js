// this will be our server file

const express = require("express");
const bodyParser = require("body-parser");



var app = express();
app.set("view engine","ejs");

//command for express for storing static files
app.use(express.static('public'));

app.use(express.urlencoded({extended:true}));
var items = [];  //array with name items

var example="working";

app.get("/",function(req,res){
    // res.render("list",{exej : example});  //the value stored in example var will be assigned to exej var & that var is called in list.ejs file within this command <%=   %>

    res.render("list",{ejes: items}) //so whaterver value we are passing in the  
});


//here with the help of post rout we are fetching the value entered by the user inside the text input
// and we are pushing that value inside array [named items]
app.post("/",function(req,res){
    //console.log(req.body.ele1);
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");  //we are redirecting user to home page
});


app.listen(8000,function(){         //on this line server is created
 console.log("Server started");     //this line will be printed if server is started successfully


});