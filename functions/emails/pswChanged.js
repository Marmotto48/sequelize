const { mailTransport } = require("./mailTransport");

let paswChanged = ({ email, userName }) => {
  console.log("from email", email);
  let params = {
    from: "no-reply@quizme.io",
    to: email,
    subject: "Password changed",
    html: `<h1>${userName}</h1>
    <h2>${link}</h2>`,
  };

  return mailTransport().sendMail(params);
};
module.exports = {
  paswChanged,
};
