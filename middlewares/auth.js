const jwt = require("jsonwebtoken");
const User = require("../model/User");


const auth = (req, res, next) => {
  const token_header = req.headers.auth;
  // const token_header = req.header("token");
  if (!token_header)
    return res.status(401).send({ error: "Token not sent!" });
  //

  // jwt.verify(token_header, process.env.JWT_PASS, function(err, decoded) {
  // if(err){
  //   console.log(err)
  // }else{
  //   console.log(decoded)
  // }
  // });

  jwt.verify(token_header, process.env.JWT_PASS, (err, decoded) => {
    if (err) return res.status(401).send({ error: "Invalid token!" });
    res.locals.auth_data = decoded;
    return next();
  });

};

module.exports = auth;
