var sendMsg    = require("./sms"),
    sendEmail  = require("./email");
function checkInMessage(host,guest) {
 let msg=
   `
Hello ${host.name}, 
You have a new Guest Visit,
Details,\n
Name: ${guest.name}
Email: ${guest.email}
Phone: ${guest.phone}
CheckIn Time: ${getTime(guest.checkIn)}
Description: ${guest.desc}`;
  let sub="Guest Visit";
  sendEmail(host.email,sub,msg);
  sendMsg(msg,getE164(host.phone));
}
function getE164(phone){
  return `+91${phone}`;
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
module.exports= checkInMessage;