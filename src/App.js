import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Loginhtml from './components/Login';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/home';
import Signup from './components/signup';
import Loginhtml from './components/login';
import EnterPodcastsDetails from './components/enterPodcastsDetails';
// import AdminPage from './components/adminPage';
import EnterPodcasts from './components/adminPagee';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Loginhtml/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/enterPodcastsDetails" element={<EnterPodcastsDetails/>}/>

        <Route path="/enterPodcast" element={<EnterPodcasts/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
        {/* <Route path="/adminPage" element={<AdminPage/>}/> */}