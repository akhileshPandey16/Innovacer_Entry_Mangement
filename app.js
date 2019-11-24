var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose");
    guest      = require("./models/guest"),
    comments   = require("./models/comment"),

    seedDB	   = require("./seed");

    // seedDB();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/yelpcamp",{
	 useMongoClient: true 
});
// ==========================================================
app.get("/checkIn/new",function(req,res) {
	res.render("checkIn");
});
// ==========================================================
// ==========================================================
app.get("/checkOut/new",function(req,res) {
	res.render("checkOut");
});
// ==========================================================
app.get("/campgrounds/:id",function(req,res) {
		var id=req.params.id;
		campground.findById(id,function(err,foundCamp) {
			if (err) {
				console.log("Error Found!")
			}
			else{
		res.render("show",{campgrounds:foundCamp});}
	});
});
// ==========================================================

app.post("/checkIn",function(req,res) {
	var name    =(req.body.guestName);
	var phone   =(req.body.guestPhone);
	var email   =(req.body.guestEmail);
	var desc	=(req.body.desc);
	var newGuest ={checkIn:+ new Date(),name:name,phone:phone,email:email,desc:desc};
	guest.create(newGuest);
	//Redirect to the CampGround!
	res.redirect("/");

});

app.get("/time",function(req,res){
  guest.findById("5ddaa66131da3425202c0f75",function (err,guest) {
    let time = guest.checkIn;
    console.log("Time"+time);
    time=time.getDate();
    res.send({"time":time});
  });
});

app.get("/*",function(req,res) {
	res.render("index");
});
// ==========================================================
app.listen(4000,function() {
	console.log("Serving YelpCamp on Port 4000");
});