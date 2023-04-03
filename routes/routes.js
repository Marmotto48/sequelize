const {
    getAll
  } = require("../controllers/driver");
  
  const auth = require("express").Router();
  

  
  // @desc Register new user
  // @route POST /user/register
  // @access Private route
  auth.get("/getall", getAll);
  

  
  module.exports = auth;
  