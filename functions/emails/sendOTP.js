const { mailTransport } = require("./mailTransport");

let sendOTP = ({ email, userName, otp }) => {
  console.log("from email", email);
  let params = {
    from: "no-reply@quizme.io",
    to: email,
    subject: "OTP verification",
    html: `<h1>${userName}</h1>
    <h2>${otp}</h2>`,
  };

  return mailTransport().sendMail(params);
};
module.exports = {
  sendOTP,
};
