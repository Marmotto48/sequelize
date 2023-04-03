const { mailTransport } = require("./mailTransport");

let reactivateEmail = ({ email, userName, link }) => {
  console.log("from email", email);
  let params = {
    from: "no-reply@quizme.io",
    to: email,
    subject: "Account Reactivation",
    html: `<h1>${userName}</h1>
    <h2>${link}</h2>`,
  };

  return mailTransport().sendMail(params);
};
module.exports = {
  reactivateEmail,
};
