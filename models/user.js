const mongoose=require("mongoose");

const userSchema=new mongoose.Schema(
  {
     fullName:
      {
        type :String,
        required  :true,
      }, 
      email :
        {
          type:String,
          require:true,
          unique:true, //no user can be with same email id    
        },
        password:
        {
          type:String,
          required:true,
        },
        role:
        {
          type:String,
          required:true,
          default:"Normal",
        },
        profilePicture:
        {
          type:String,
        },

  },
  {timestamps:true}
);


const User=mongoose.model("User",userSchema);
module.exports=User;