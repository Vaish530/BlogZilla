const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const cookieParser=require("cookie-parser");
//database
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/BlogZilla")
.then(()=>console.log("mongodb connected!.."))
.catch((err)=>console.log("mongodb connection error",err));

const userRouter=require("./routers/userRoutes");
const staticRouter=require("./routers/staticRouter");
const blogRouter=require("./routers/blogRoutes");
const commentRouter=require("./routers/commentRouter");
const path=require("path");
//registering middleware
const {checkForToken}=require("./middlewares/auth");

//configrations
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

//middlewares
app.use(express.static(path.resolve("./public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); //reading the input from the from
app.use(cookieParser());
app.use(checkForToken);
// register routers


app.use("/",staticRouter);
app.use("/user", userRouter);
app.use("/blog",blogRouter);
app.use("/comment",commentRouter);

//listener

app.listen(8000,()=>
console.log("Server started at port 8000"));