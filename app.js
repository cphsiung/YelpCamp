var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
	{name: "Salmon Creek", image: "https://www.photosforclass.com/download/px_1687845"},
	{name: "Granite Hill", image: "https://www.photosforclass.com/download/px_699558"},
	{name: "Mocha's Rest", image: "https://www.photosforclass.com/download/px_2422265"}
]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name: name, image: image};
	campgrounds.push(newCampground);
	//redirect back to campgrounds page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new.ejs");
});


app.listen(3000, function(){
	console.log("The YelpCamp Server Has Started!")
});