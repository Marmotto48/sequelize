const jwt = require("jsonwebtoken");

module.exports = {
  isAuth: async (req, res, next) => {
    try {
      let token;
      if (req.cookies && req.cookies["x-sultan-token"]) {
        token = req.cookies["x-sultan-token"];
        //Decode token
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // not authorized
        if (!verifyToken)
          res.status(401).json({
            code: 5001,
            description: `Unauthorized access`,
            success: false,
            date: new Date(),
          });

        // not verified
        if (!verifyToken.isVerified)
          res.status(400).json({
            code: 4000,
            Description: "Your account is not verified.",
            success: false,
            date: new Date(),
          });

        // not active
        if (!verifyToken.isActive)
          res.status(401).json({
            code: 5001,
            Description: "Your account has been deactivated.",
            success: false,
            date: new Date(),
          });

        req.userID = verifyToken.userID;
        next();
      } else {
        res.status(400).json({
          code: 4000,
          Description: "Please provide the necessary credentials.",
          success: false,
          date: new Date(),
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 5001,
        description: `Server side error : ${error}`,
        success: false,
        date: new Date(),
      });
    }
  },

  // user created but not verified
  isCreated: async (req, res, next) => {
    try {
      let token;
      if (req.cookies && req.cookies["x-sultan-token"]) {
        token = req.cookies["x-sultan-token"];
        //Decode token
        const verifyToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

        // not authorized
        if (!verifyToken)
          res.status(401).json({
            code: 5001,
            description: `Unauthorized access`,
            success: false,
            date: new Date(),
          });

        req.userID = verifyToken.userID;
        next();
      } else {
        res.status(400).json({
          code: 4000,
          Description: "Please provide the necessary credentials za3maaaa.",
          success: false,
          date: new Date(),
        });
      }
    } catch (error) {
      res.status(500).json({
        code: 5001,
        description: `Server side error : ${error}`,
        success: false,
        date: new Date(),
      });
    }
  },
};
