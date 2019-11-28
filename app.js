var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose"),
    guest      = require("./models/guest"),
    host       = require("./models/host"),
    checkIn    = require("./Mailer/checkIn"),
    checkOut   = require("./Mailer/checkOut"),
    seedDB	   = require("./seed");
    seedDB();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
mongoose.connect("mongodb://localhost/Innovaccer",{
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
    , update = { address:naddress,complete:true,checkOut:+ new Date()}
    , options = { multi: true };

  guest.update(conditions, update, options, checkedOut);

  function checkedOut(err, numAffected) {
    guest.find({"name":nname},function (err,host) {
      let data=host[0]._doc;
      checkOut(data);
    });
    res.redirect("/");
  }
});
// ==========================================================
function sendToHost(guest){
  console.log(guest);
  console.info(guest.hostId);
  host.find({"hostId":guest.hostId},function (err,host) {
    let data=host[0]._doc;
    checkIn(data,guest);
  });
}
app.post("/checkIn",function(req,res) {
	var name    =(req.body.guestName);
	var hostId  =(req.body.hostID);
	var phone   =(req.body.guestPhone);
	var email   =(req.body.guestEmail);
	var desc	=(req.body.desc);
	var newGuest ={hostId:hostId,checkIn:+ new Date(),name:name,phone:phone,email:email,desc:desc,complete:false};

	guest.create(newGuest);
    sendToHost(newGuest);

	res.redirect("/");

});
// ==========================================================
app.get("/*",function(req,res) {
	res.render("index");
});
// ==========================================================
app.listen(4000,function() {
	console.log("Serving YelpCamp on Port 4000");
});