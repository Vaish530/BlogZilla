const jwt=require("jsonwebtoken");
const User=require("../models/user");
const JWT_secret="replace with your secret code";
async function generateTokenForUser(id)
{
  const user=await User.findById(id);
  const payload=
  {
    _id:user._id,
    email:user.email,
    fullname:user.fullName,
    role:user.role,
  };
  const token=jwt.sign(payload,JWT_secret);
  return token;
}


function validateToken(token)
{
  return jwt.verify(token,JWT_secret)
}
module.exports={
  generateTokenForUser,
  validateToken,
};

