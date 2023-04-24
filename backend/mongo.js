const mongoose=require("mongoose");

// mongoose.connect("mongodb+srv://manikantachegu2020:HNE5wcKIs6Mk12ll@cluster0.pcqdz08.mongodb.net/test").then(()=>{
    mongoose.connect(`mongodb+srv://manikanta_chegu:Chegu2003@cluster0.eo0dz9k.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed");
})

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})
const collection=mongoose.model("collectionsssss",newSchema)
// module.exports=collection


// const mongoose=require("mongoose");

const neww_Schema=new mongoose.Schema({
    videoname:{
        type:String,
        required:true,
    },
})
const podcastcollection=mongoose.model("podcastcollection",neww_Schema);
// module.exports=podcastcollection

module.exports = {
podcastcollection,collection
}


const newww_Schema=new mongoose.Schema({
    podcastname:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    speaker:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    // :podcastname,
    //     :category,
    //     :speaker,
    //     :
    
})
const podcast=mongoose.model("podcastsssssssssssss",newww_Schema);
// module.exports=podcastcollection

module.exports = {
podcastcollection,collection,podcast
}


