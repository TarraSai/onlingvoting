const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send("Unauthorized: No token provided");
  }

  jwt.verify(token, process.env.Mykey, (error, decoded) => {
    if (error) {
      return res.status(403).send("Unauthorized: Invalid token");
    }
    req.userId = decoded.userId;
    next();
  });
};

module.exports = verifyToken;
