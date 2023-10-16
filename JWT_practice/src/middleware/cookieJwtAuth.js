import jwt from 'jsonwebtoken';

const cookieJwtAuth = (req, res, next)=>{
  const token = req.cookies.token;
  try{
    console.log('token: ',token);
    const user = jwt.verify(token, 'secret');
    req.user = user;
    next();
  } catch(error){
    res.clearCookie('Token');
    return res.status(401)
    .json({message: 'Unauthorized'})
    .redirect('/');
  }
};

export default cookieJwtAuth;