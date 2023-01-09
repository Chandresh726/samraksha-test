const accountSid = "ACfbbccb40cb3047a442dd47a845cb421f";
const authToken = "720ba976cb4e1b9a051d700cd9482f81";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({ from: "+918008093663", body: "Hi there", to: "+917386463652" })
  .then((message) => console.log(message.sid));
