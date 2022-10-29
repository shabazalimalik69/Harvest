const mongoose=require("mongoose")

const DB = process.env.DATABASE
const connect=()=>{
    return mongoose.connect("mongodb+srv://harvest:a@cluster0.h2sgx3q.mongodb.net/?retryWrites=true&w=majority")
}


module.exports=connect;