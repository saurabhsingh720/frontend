// import React from 'react'
import "./App.css";
import { useEffect, useContext } from 'react';
import { Context } from "./main";
// import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application.jsx";
import MyApplications from "./components/Application/MyApplication.jsx";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound.jsx";
import MyJobs from "./components/Job/MyJobs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://japply-backend-1.onrender.com/api/v1/user/getuser", { withCredentials: true });
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);


  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/job/getall' element={<Jobs/>} />
          <Route path='/job/:id' element={<JobDetails/>} />
          <Route path='/job/post' element={<PostJob/>} />
          <Route path='/job/me' element={<MyJobs/>} />
          <Route path='/application/:id' element={<Application/>} />
          <Route path='/application/me' element={<MyApplications/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  )
}

export default App;
