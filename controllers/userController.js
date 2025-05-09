const { generateTokenForUser } =require("../utils/auth")
const User = require("../models/user");
const Blog= require("../models/blog");
exports.handleUserLogin = async function (req, res) {
  
  const{email,password}=req.body;
  try
  {
    if(!email||!password) throw new Error("email and password is required to login");
    //need to find the emaila md password from the database
    const user=await User.findOne({email});

    //if there is no user with email

    if(!user) throw new Error(`User with ${email} doesn't exist `);


    //if given password is not matched with login password
    if(user.password!==password)throw new Error(`Invalid password`);
    //generate token

    const token =await generateTokenForUser(user._id);
    //console.log(token);
    // return res.cookie("token",token).render('login',{message:"login is sucess"});
    return res.cookie("token",token).redirect("/");
  }
catch(error) 
{
  res.render("login",
    {
      error,
    }
  );
}


};
exports.handleUserSignUp = async function (req, res) {
  const { fullName,email, password } = req.body;
  try {
    if (!fullName) throw new Error("fullname is required");
    if (!email) throw new Error("email is required");
    if (!password || password.length < 5)
      throw new Error(
        "password is required with atmost more than 5 characters"
      );
    const user=await User.create({ fullName, email, password });
    const token=await generateTokenForUser(user.id);

    return res.cookie("token",token).redirect("/");
    // return res.render("login", { message: "Signup was succesfull" });
  } catch (error) {
    res.render("signup", {
      error,
    });
  }
};
exports.renderUsersBlogs=async function(req,res)
{
  if(!req.user) return res.redirect("/login");
  const blogs=await Blog.find({createdBy:req.user._id});
  return res.render('userBlogs',
    {
      user:req.user,
      blogs,
    }
  );
};
