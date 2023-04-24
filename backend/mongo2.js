const mongoose=require("mongoose");

const new_Schema=new mongoose.Schema({
    videoname:{
        type:String,
        required:true,
    },
})
const podcastcollection=mongoose.model("podcastcollection",new_Schema);
module.exports=podcastcollection