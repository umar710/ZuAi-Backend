//Authenticate Token Middleware
const jwt = require("jsonwebtoken");

require("dotenv").config();

const authorizationToken = async (request, response, next) => {
  try {
    let jwtToken; // first check request headers has authorization or not
    const authHeader = await request.headers["authorization"];
    if (authHeader !== undefined) {
      // Extract the jwt token from the request headers
      jwtToken = authHeader.split(" ")[1];
    }
    if (jwtToken === undefined) {
      response.status(401).json("Invalid JWT Token");
    } else {
      // Verify the JWT token

      jwt.verify(jwtToken, process.env.SECRET_KEY, async (error, payload) => {
        if (error) {
          response.status(401).json("Invalid JWT Token");
        } else {
          //  request.username = payload.username;
          //request.id = payload.id;
          const user = (request.user = payload); // Attach user information to the request object
          console.log(user);
          next();
        }
      });
    }
  } catch (e) {
    response.status(500).json("Internal Error");
  }
};

module.exports = authorizationToken;
