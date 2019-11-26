var AWS = require("aws-sdk");
AWS.config.loadFromPath('./config.json');
var ses = new AWS.SES();
function sendEmail(address,sub,msg){

  var params = {
    Destination: { /* required */
      ToAddresses: [
        address,
        /* more items */
      ]
    },
    Message: { /* required */
      Body: { /* required */
        Text: {
          Data: msg, /* required */
        }
      },
      Subject: { /* required */
        Data: sub, /* required */
      }
    },
    Source: 'akhil.p4597@gmail.com', /* required */
  };

  ses.sendEmail(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}
module.exports= sendEmail;