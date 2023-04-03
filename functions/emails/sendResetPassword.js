const { mailTransport } = require("./mailTransport");

let sendResetPassword = ({ email, userName, link }) => {
  console.log("from email", email);
  let params = {
    from: "no-reply@quizme.io",
    to: email,
    subject: "Reset Password",
    html: `<h1>${userName}</h1>
    <h2>${link}</h2>`,
  };

  return mailTransport().sendMail(params);
};
module.exports = {
  sendResetPassword,
};
