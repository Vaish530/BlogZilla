const Blog=require("../models/blog");
exports.renderHomePage=async function(req,res)
{
  const allBlogs=await Blog.find({}).sort({createdAt:-1});
return res.render("home",
  {
    user:req.user,
    blogs:allBlogs,
  }
);
}
exports.renderLoginpage=function(req,res)
{
  // if(req.cookies["token"]) return res.redirect("/");
  if(req.user) return res.redirect("/");
return res.render("login");
}
exports.renderSignUpPage=function(req,res)
{
  if(req.user) return res.redirect("/");
return res.render("signup");
};