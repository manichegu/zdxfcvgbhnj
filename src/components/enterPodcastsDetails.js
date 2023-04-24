import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {useNavigate,Link} from "react-router-dom";

export default function EnterPodcastsDetails() {

    
    const history=useNavigate();


  const [podcast,setPodcast]=useState('');
  async function submit(e){
    e.preventDefault();
    try{
      await axios.post("http://localhost:8000/enterPodcastsDetails",{
        podcast
      })
      .then(res=>{
        if(res.data==="exist"){
            alert("Name already exits!!");
           
        }
        else if(res.data==="notexist"){
            history("/home");
            // alert("Name already exits!!");
        }
      })
      .catch(e=>{
        alert("worng details!!");
        console.log(e);
      })

    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <>
    <form action="post">
  <input type="text" onChange={(e)=>{setPodcast(e.target.value)}} />
  {/* <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/> */}
  <input type="submit" onClick={submit}/>
</form>
    </>
  )
}
