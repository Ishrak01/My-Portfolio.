const mongoose=require("mongoose")


const projectSchema= new mongoose.Schema({

name:{
  required:true,
  type:String
},
image:{
  type:String
},
url:{
  type:String,
  required:true,
  unique:true,
  trim:true
}
  
})

module.exports=mongoose.model('projects',projectSchema)