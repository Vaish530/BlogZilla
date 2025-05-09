const Blog = require("../models/blog");
const Comment=require("../models/comment");
exports.renderCreateBlogPage = function(req, res) {
  res.render("createBlog", {
    user: req.user,
  });
};


exports.createNewBlogPost=async function(req,res)
{
  const{ title,content }=req.body;
  try
  {
    if(!title||!content) throw new Error("All fields are required")
      await Blog.create(
        {
          content,
          title,
          coverImage:req.file.filename,
          createdBy:req.user._id
        }
      );
      return res.render("createBlog",{message:"blog created succesfully"});
  }
  catch(error)
  {
    res.render("createBlog",
      {
        error,
      }
    );
  }
};
exports.renderBlogPostPage=async function(req,res)
{
 try
{      const id=req.params.id;
   const blog=await Blog.findByIdAndUpdate(id,{$inc :{views:1}}).populate("createdBy");
    const comments=await Comment.find({blogId:blog._id}).populate("createdBy");
   
    return res.render("blog", {  
        user:req.user,
          blog,       
           comments,
      }
    )

   }
  catch(error)
  {
   res. render("home");
  }
 }

exports.handleDeleteBlog=async function(req,res){
  await Blog.deleteOne({_id:req.params.id});
  return res.redirect("/");
}