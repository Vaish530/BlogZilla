const express=require("express");
const router=express.Router();
const {renderHomePage,renderLoginpage,renderSignUpPage}=require("../controllers/staticController")


router.get("/",renderHomePage);
router.get("/login",renderLoginpage);
router.get("/signup",renderSignUpPage)
module.exports=router;