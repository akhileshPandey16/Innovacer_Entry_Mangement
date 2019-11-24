var express    = require("express"),
    app        = express(),
    bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    guest      = require("./models/guest"),
    host      = require("./models/host"),
    seedDB	   = require("./seed");

    seedDB();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/yelpcamp",{
	 useMongoClient: true 
});
// ==========================================================
app.get("/checkIn/",function(req,res) {
	res.render("checkIn");
});
// ==========================================================
// ==========================================================
app.get("/checkOut/",function(req,res) {
	res.render("checkOut");
});
// ==========================================================
// ==========================================================
app.post("/checkOut/",function(req,res) {
	let nname = req.body.name,
        naddress=req.body.address;
        console.info(nname);
        console.info(naddress);

  var conditions = { name: nname }
    , update = { address:naddress,complete:true}
    , options = { multi: true };

  guest.update(conditions, update, options, checkedOut);

  function checkedOut(err, numAffected) {
    res.redirect("/");
  }
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
	var hostId    =(req.body.hostID);
	var phone   =(req.body.guestPhone);
	var email   =(req.body.guestEmail);
	var desc	=(req.body.desc);
	var newGuest ={checkIn:+ new Date(),name:name,phone:phone,email:email,desc:desc,complete:false};
    host.find({"hostId":hostId},function (err,host) {
      let data=host[0]._doc;
      console.log(data.phone);
      console.log(data.email);
      console.log(data.name);
    });
	guest.create(newGuest);

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