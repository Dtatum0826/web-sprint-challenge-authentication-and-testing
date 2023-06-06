module.exports = (req, res, next) => {
 console.log('restricted')
  next();
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */

      
};




//My code to review after it is wired

// const jwt = require('jsonwebtoken');
// const { JWT_SECRET } = require('./config');

// function restricted(req, res, next) {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: 'Token required' });
//   }

//   jwt.verify(token, JWT_SECRET, (err, decoded) => {
//     if (err) {
//       return res.status(401).json({ message: 'Invalid or expired token' });
//     }

//     // Attach the decoded user information to the request object
//     req.user = decoded;

//     next();
//   });
// }