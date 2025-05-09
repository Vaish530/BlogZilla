const Comment=require("../models/comment")
exports.handleCreateComment=async function(req,res)
{
  if(!req.user)  return res.json({error:"you are not logged in"})
    const{ blogId ,content }=req.body;
    await Comment.create({blogId,content,createdBy:req.user._id})
    return res.json({message:"success"});


};
