//Seed data for campgrounds
// ==========================================================
var mongoose=require("mongoose");
var Campground=require("./models/guest");
var Comment=require("./models/comment");
var data=[
		{name:"Laky Lake",image:"/c4.png",desc:"Earlier it was Lake Laky, but it changed with time! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"},
		{name:"Kanyon Floor",image:"/c3.png",desc:"This where you get to touch the Canyon's floor!  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"},
		{name:"Crow's Flame",image:"/c6.jpg",desc:"You can still hear the Crow's here, if you get lucky, you might also get to see the Flames! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"},
		{name:"Salmon Creek",image:"/c6.jpg",desc:"There was Salmon here some time ago, now only trout exist! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"},
		{name:"Winter Haven",image:"/c5.jpg",desc:"T'is is the place you want to cozy up, if looking for a site to camp in Winters... Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"},
		{name:"Granite Hill",image:"/c7.jpg",desc:"Welcome to Granite hill, no bayhroom, no toilet just rugged ol'e Grrranite, Yeah!! Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse"}
]

var comData=[	
		{text:"This is",author:"Homer"},
		{text:"This is",author:"Homer"},
		{text:"This is",author:"Homer"},
		{text:"This is",author:"Homer"},
		{text:"This is",author:"Homer"},
		{text:"This is",author:"Homer"}
		
]


function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
         //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        });
                }
            });
        });
    }); 
    //add a few comments
}
	module.exports= seedDB;