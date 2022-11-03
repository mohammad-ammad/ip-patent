import React from "react";
import logo from "../assets/loginLogo.png";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { InstanceContext } from "../context/InstanceContext";
import { useEffect } from "react";
const Rigister = () => {
  
  //---USESTATE
  const [registerInput, setRegisterInput] = useState({
    name: "",
    email: "",
    country: "",
    address: "",
    gender: "",
    phone: "",
    password: "",
  });
  
  //---USENAVIGATION
  const navigate = useNavigate();

  const FormHandler = (e) => {
    setRegisterInput({
      ...registerInput,
      [e.target.name]: e.target.value,
    });
  };
  

  //---USECONTEXT
  const {connect, address, registerUser, token} = useContext(InstanceContext)

  //---REGISTER USER 
  const registerFunc = () => 
  {
    try {
      registerUser(registerInput)
    } catch (error) {
      console.log(error.message)
    }
  }

  //---USEEFFECT
  useEffect(() => {
    if(token != "")
    {
      navigate('/')
    }
  },[token])

  return (
    <>
     <Navbar/>
      <div className="w-full h-screen  bg-slate-900">
        <div className="flex flex-col h-screen justify-center">
          <center>
            <img className="w-16 h-16" src={logo} />
          </center>
          <center className="text-white text-3xl pt-3 font-semibold">
            <h1>Register here</h1>
          </center>
          <center className="pt-2">
            <input
              className=" w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700"
              type="text"
              value={address}
              disabled
              autocomplete="off"
            />
          </center>
          <center className="pt-2">
            <input
              className=" w-56 p-1 px-3 text-sm   text-white border-none bg-slate-700"
              type="text"
              name="name"
              value={registerInput.name}
              onChange={FormHandler}
              autocomplete="off"
              placeholder="name "
            />
          </center>
          <center className="pt-2">
            <input
              className=" w-56 p-1 px-3 text-sm  text-white border-none bg-slate-700"
              type="email"
              name="email"
              value={registerInput.email}
              onChange={FormHandler}
              autocomplete="off"
              placeholder="Gmail"
            />
          </center>

          <center className="pt-2">
            <select onChange={FormHandler} name="country" className="w-56 p-1 px-3 text-sm  text-white border-none bg-slate-700">
            <option disabled selected>Country</option>
              <option  value="United State">United State</option>
              <option value="united kigdom">United Kingdom</option>
              <option value="pakistan">Pakistan</option>
              <option value="india">India</option>
            </select>
            {/* <input className=' w-56 p-1 px-3 text-sm   text-white border-none bg-slate-700' type="text" autocomplete="off" placeholder='name '/> */}
          </center>
          <center className="pt-2">
            <input
              className=" w-56 p-1 px-3 text-sm  text-white border-none bg-slate-700"
              type="text"
              name="address"
              value={registerInput.address}
              onChange={FormHandler}
              autocomplete="off"
              placeholder="Address"
            />
          </center>
          <center className="pt-2">
            <select onChange={FormHandler} name="gender" className="w-56 p-1 px-3 text-sm  text-white border-none bg-slate-700">
            <option disabled selected>Gender</option>
              <option value="Male">Male</option>
              <option value="female">Female</option>
            </select>
            {/* <input className=' w-56 p-1 px-3 text-sm   text-white border-none bg-slate-700' type="text" autocomplete="off" placeholder='name '/> */}
          </center>
          <center className="pt-2">
            <input
              className=" w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700"
              type="tel"
              name="phone"
              value={registerInput.phone}
              onChange={FormHandler}
              autocomplete="off"
              placeholder="Phone "
            />
          </center>
          <center className="pt-2">
            <input
              className=" w-56 p-1 text-sm border-collapse px-3 text-white  bg-slate-700"
              type="password"
              name="password"
              value={registerInput.password}
              onChange={FormHandler}
              autocomplete="off"
              placeholder="Password "
            />
          </center>

          {/* <center className='pt-2'>
                <input className='w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer' type="submit" value='SignUp' />
            </center> */}

          <center className="pt-2">
            {address ? (
              <input
                className="w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer"
                type="submit"
                onClick={registerFunc}
                value="SignUp"
              />
            ) : (
              <input
                className="w-56 p-1 font-semibold  text-lg hover:bg-blue-500 text-white bg-blue-400 cursor-pointer"
                type="submit"
                onClick={() => connect()}
                value="Connect To Wallet"
              />
            )}
          </center>
        </div>
      </div>
      <Footer/>
    </>

  );
};

export default Rigister;
