const express = require("express");
const router = express.Router();
const{handleUserLogin,handleUserSignUp,renderUsersBlogs}= require("../controllers/userController");
const{ensureAuthenticated}=require("../middlewares/auth");

router.get("/logout",function(req,res)
{
 return res.clearCookie("token").redirect("/");
});

router.get("/blogs",ensureAuthenticated,renderUsersBlogs);
router.post("/login",handleUserLogin);
router.post("/signup",handleUserSignUp);
module.exports = router;
