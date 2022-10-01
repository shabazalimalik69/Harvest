const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  company:{type:String,required:true},
  email: { type: String, required: true, unique: true },
  password: { type: Number && String, required: true },
});

const usersModel = mongoose.model("user", usersSchema);

module.exports = usersModel;
