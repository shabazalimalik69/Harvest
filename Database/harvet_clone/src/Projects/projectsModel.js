
const mongoose=require("mongoose");


const projectsSchema= new mongoose.Schema({
  id: {type:String,required:true},
  client_name:{type:String,required:true},
  project_name:{type:String,required:true,unique:true},
  project_code:{type:Number,required:true},
  date:{type:String,required:true},
  notes:{type:String},
  cost:{type:Number},
  budgetperhour:{type:Number}
})

const projectsModel=mongoose.model("project",projectsSchema);



module.exports=projectsModel;