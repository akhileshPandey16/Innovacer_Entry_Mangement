var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost/cat",{
	 useMongoClient: true 
});



var kittySchema =new mongoose.Schema({
    name: String,
    age: String
});

var cat = mongoose.model('cat', kittySchema);
var george=new cat({
name:"Guru", age:"20"
});
george.save();
// george.save(function(err,cat) {
// 	if(err){
// 		console.log("Something went Wrong!!");
// 	}
// 	else{
// 		console.log("We just saved A cat!")
// 		console.log(cat);
// 	}

// });
