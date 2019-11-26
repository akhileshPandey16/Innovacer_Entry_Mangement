var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
  // var sns = new AWS.SNS();
var sns = new AWS.SNS({ "region": "us-east-1" });
var params = {
  attributes: { /* required */
    '<String>': 'STRING_VALUE',
    /* '<String>': ... */
  }
};

function sendMsg(msg,phone){
  var para = {
    Message: msg,
    PhoneNumber: phone,
    Subject: 'STRING_VALUE',
  };
  sns.publish(para, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

module.exports= sendMsg;