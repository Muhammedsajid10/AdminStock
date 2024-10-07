import jwt from 'jsonwebtoken';

const authenticateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    console.log('Token in authRequire:', token);

    const decode = await jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded Data in authRequire:', decode);

    req.user = decode;
    next();
  } catch (err) {
    res.status(403).send('Invalid token');
  }
};

export default authenticateToken;




// import jwt from 'jsonwebtoken';

// const authenticateToken = (req, res, next) => {
//   console.log('JWT_SECRET in Middleware:', process.env.JWT_SECRET);  // Should print your secret

//   const authHeader = req.headers['authorization'];
//   if (!authHeader) {
//     return res.status(401).json({ message: 'Authorization header missing' });
//   }

//   const token = authHeader.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ message: 'Token missing' });
//   }

//   jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
//     if (err) {
//       return res.status(403).json({ message: 'Invalid or expired token' });
//     }

//     req.user = user;
//     next();
//   });
// };

// export default authenticateToken;
