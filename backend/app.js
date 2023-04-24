const express=require("express");
// const collection=require("./mongo");
// const podcastcollection=require("./mongo2")
const {podcastcollection,collection,podcast}=require("./mongo")
const cors=require("cors");
const app=express();
const multer = require('multer');
const fs = require('fs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.get("/",cors(),(req,res)=>{

})
app.post("/",async(req,res)=>{
    const{email,password}=req.body;

    try{
        const check=await collection.findOne({email:email});
        if(email===''){
            res.json("please enter email!!");
            console.log("please enter email!!");
        }       
        else if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
        }
    }catch(e){
        res.json("notexist");
    }
})

var useremail="";
let podcastsList;
app.post("/signup",async(req,res)=>{
    const{email,password}=req.body;
    const data={
        email:email,
        password:password
    }
    useremail=email;
    try{
        const check=await collection.findOne({email:email});
        if(email===''){
            res.json("please enter email!!");
            console.log("please enter email!!");
        }  
        else if(check){
            res.json("exist");
        }
        else{
            res.json("notexist");
            await collection.insertMany([data]);
            podcastsList=await podcastcollection.find();
            module.exports=podcastsList;
        }
    }catch(e){
        res.json("notexist");
    }
})

app.get("/getallPodcasts",async(req,res)=>{
    try{
        
            podcastsList=await podcastcollection.find();
            
        res.json(podcastsList);
    }catch(e){
        res.json("notexist");
    }
})
app.post("/enterPodcastsDetails",async(req,res)=>{
    const{podcast}=req.body;
    console.log(">>>>>>>>>>>>>>>>>>>>");
    console.log(podcast);
    const data={
        videoname:podcast,
    }

    try{
        // const check=await podcastcollection.findOne({videoname:podcast});
        // podcastsList=await podcastcollection.find();
        // console.log(checks);
        if(check){
            res.json("exist");
            
        }
        else{
            res.json("notexist");
            await podcastcollection.insertMany([data]);
           
        }
    }catch(e){
        res.json("notexist");
    }
})
app.post("/enterPodcast",async(req,res)=>{
    const{podcastname,category,speaker,description}=req.body;
    console.log(">>>>>>>>>>>>>>>>>>>>"+req.body);
    // console.log(podcast);
    const data={
        podcastname:podcastname,
        category:category,
        speaker:speaker,
        description:description
    }

    try{
        // const check=await podcastcollection.findOne({videoname:podcast});
        // podcastsList=await podcastcollection.find();
        // console.log(checks);
       console.log(data);
       await podcast.create(data);
            res.json("done");
            
           
        
    }catch(e){
        console.log("NOT__________________________________________"+e);
        res.json("notexist");
    }
})








// // const express = require('express');
// // const multer = require('multer');
// const fs = require('fs');

// // const app = express();
// const upload = multer({ dest: 'uploads/' });

// // Route to handle video file upload
// app.post('http://localhost:8000/api/videos/upload', upload.single('video'), (req, res) => {
//   // Read the uploaded file and convert it into binary data
//   const videoPath = req.file.path;
//   const videoData = fs.readFileSync(videoPath);
//   fs.unlinkSync(videoPath); // Remove the uploaded file

//   // Store the video data in MongoDB
//   const videoDocument = {
//     videoName: req.file.originalname,
//     videoData: videoData
//   };
//   VideoCollection.insertOne(videoDocument)
//     .then(result => {
//       // Handle successful storage
//       console.log('Video stored successfully in MongoDB');
//       res.status(200).json({ message: 'Video stored successfully' });
//     })
//     .catch(error => {
//       // Handle storage error
//       console.error('Error storing video in MongoDB', error);
//       res.status(500).json({ error: 'Failed to store video' });
//     });
// });

// app.listen(5000, () => {
//   console.log('Server running on http://localhost:5000');
// });

app.listen(8000,()=>{
    console.log("port connected");
})