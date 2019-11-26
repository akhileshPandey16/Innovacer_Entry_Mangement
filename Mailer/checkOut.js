var sendMsg    = require("./sms"),
  sendEmail  = require("./email");
function checkOutMessage(guest) {
  let msg=
    `
Hello ${guest.name}, 
Thank you for Visiting Innovaccer,
Details of Your Visit,
Name: ${guest.name}
Email: ${guest.email}
Phone: ${guest.phone}
CheckIn Time: ${getTime(guest.checkIn)}
CheckOut Time: ${getTime(guest.checkOut)}
Description: ${guest.desc}
Address Visited: ${guest.address}`;
  let sub="Guest Visit";
  sendEmail(guest.email,sub,msg);
  sendMsg(msg,getE164(guest.phone));
}
function getTime(dt){
  let time=new Date(dt);
  let hh=time.getHours(),
    mm=time.getMinutes();
  if(mm<10){
    mm=`0${mm}`;
  }
  let day="PM";
  if(hh<12){
    day=" AM";
  }
  return `${hh}:${mm} ${day}`;
}
function getE164(phone){
  return `+91${phone}`;
}
module.exports= checkOutMessage;