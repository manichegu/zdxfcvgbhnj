
// import React,{useState} from 'react'
import Data from "./podcastsDetails";
import React, { useState, useEffect } from 'react';
// import podcastsList from "./app"
import { Link } from "react-router-dom";
import axios from 'axios';
import {useLocation,useNavigate} from 'react-router-dom';
// import VideoUploadForm from './videoUpload';
    import VideoUploadForm from './videoUpload';





  

export default function Home() {
  const [podcastsList,setData]=useState([]);

  useEffect(()=>{
      // fetch('https://jsonplaceholder.typicode.com/todos').then(
      fetch('http://localhost:8000/getallPodcasts').then(
        response=>response.json()
      ).then((json)=>{
         setData(json);
        console.log(json);
       })
  },[])
    const location=useLocation();
    const history=useNavigate();
    const [search,setSearch]=useState('');
    

// fetch("/getallPodcasts")
// .then((response)=>{
//   return response.json();
// }).then((podcastsList)=>{
//   console.log(podcastsList);
// })

  return (
    <div>
      {/* <h1>Hello {location.state.id}</h1> */}
      <h1>Hello </h1>
      <h4>enter the podcast name</h4>
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}/>
      {Data.filter(city=>city.name.toLowerCase().includes(search.toLocaleLowerCase())).map(city=>{
      return<div >
        {city.name}
      </div>})}


      <section>
      {/* <VideoUploadForm /> */}
      {/* {Data.filter(city=>city.name).map(city=>{
      return<div >
        {city.name}
      </div>})} */}
      {/* {res.podcastsList} */}


      {/* <div>
      <h1>Data from MongoDB:</h1>
      <ul>
        {data.map(item => (
          <li >{item.videoname}</li>
        ))}
      </ul>
    </div> */}


      {/* {podcastsList.map(i=>{
        return<div>
          {i.videoname}
        </div>
      })} */}
      {podcastsList.map((i)=>{
        return <p>{i.videoname}</p>;
      })}

      </section>


      <section>
      <Link to='/enterpodcastsdetails'>Enterpodcastdetails</Link>
      </section>
    </div>
  )
}


