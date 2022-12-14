import React, { useState, useContext } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/abstract.mp4";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { data } from "autoprefixer";
import { wait } from "@testing-library/user-event/dist/utils";
import { InstanceContext } from "../context/InstanceContext";

const InputForm = () => {
  //---USESTATES
  const [inputForm, setInputForm] = useState({
    first: "",
    seconed: "",
    third: "",
    fourth: "",
    fifth: "",
    sixth: "",
    seventh: "",
    eighth: "",
    nineth: "",
    tenth: "",
    eleventh: "",
    tewelveth: "",
    thirteen: "",
    fourteenth: "",
    fifteenth: "",
    sixteenth: "",
    seventeen: "",
    eightheenth: "",
    nineteen: "",
    twenty: "",
    twentyOne: "",
    twentyTwo: "",
    twentyThree: "",
    twentyFour: "",
    twentyFive: "",
    twentySix: "",
    twentySeven: "",
    twentyEight: "",
    twentyNine: "",
    Thirty: "",
    ThirtyOne: "",
    ThirtyTwo: "",
  });
  
  const HandlerForm = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };
  
  const {address, createFile, count} = useContext(InstanceContext)
  
  //---VALIDATIONS
  const validation = () => 
  {
    if(
      inputForm.first != "" &&
      inputForm.seconed != "" &&
      inputForm.third != "" &&
      inputForm.fourth != "" &&
      inputForm.fifth != "" &&
      inputForm.sixth != "" &&
      inputForm.seventh != "" &&
      inputForm.eighth != "" &&
      inputForm.tenth != "" &&
      inputForm.eleventh != "" &&
      inputForm.tewelveth != "" &&
      inputForm.thirteen != "" &&
      inputForm.fourteenth != "" &&
      inputForm.fifteenth != "" &&
      inputForm.sixteenth != "" &&
      inputForm.seventeen != "" &&
      inputForm.eightheenth != "" &&
      inputForm.nineteen != "" &&
      inputForm.twenty != "" &&
      inputForm.twentyOne != "" &&
      inputForm.twentyTwo != "" &&
      inputForm.twentyThree != "" &&
      inputForm.twentyFour != "" &&
      inputForm.twentyFive != "" &&
      inputForm.twentySix != "" &&
      inputForm.twentySeven != "" &&
      inputForm.twentyEight != "" &&
      inputForm.twentyNine != "" &&
      inputForm.Thirty != "" &&
      inputForm.ThirtyOne != "" &&
      inputForm.ThirtyTwo != ""
    )
    {
      return true
    }
    else 
    {
      return false
    }
  }

  //---CREATE FILE FUNC
  const createFileFunc = (e) => 
  {
    try {
      e.preventDefault()
      if(validation())
      {
        createFile(inputForm)
      }
      else 
      {
        toast.error("Please Fill all Fields")
      }
    } catch (error) {
      console.log(error.messsage)
    }
  }
  return (
    <>
      <div className="min-h-screen py-8 ">
        <video className=" form-video-bg " src={BgVideo} autoPlay muted loop />

        <div className="container mx-auto">
          <h1 className=" flex text-[#660000] font-semibold text-3xl  justify-center">
            IP DAO
          </h1>

          <h2 className=" flex justify-center text-[#660000] font-semibold">
            Patent Collections
          </h2>

          <div className="flex justify-center w-full mx-auto mt-6 lg:w-8/12 p-4 pb-0">
            <div className=" w-full pb-5 pt-5 px-4 rounded-xl border-2 bg-[#373C44] border-[#660000] bg-opacity-90">
              <div className="flex justify-between ">
                <label className="text-lg text-gray-400">
                  Your patent collection:
                </label>
                <label className="text-lg text-gray-400">
                  {/* {window.localStorage.key(address) === address
                    ? localStorage.getItem(address)
                    : count} */}
                    {count}
                </label>
              </div>
            </div>
          </div>
          <div className="flex w-full mt-6 lg:w-8/12 p-4 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="  w-full pb-5 pt-5 px-5 bg-[#373C44] rounded-xl border-2 border-[#660000] bg-opacity-90 text-white">
              <div className="mb-5">
                <img className="w-14 h-auto ml-auto" src={logo} />
              </div>
              <form action="" className="px-3">
      <div class="flex justify-center  flex-col">
        <p className="flex justify-center ">For your name, use the name on your driver???s license or other permanent documentation.</p>
      <div className=" flex justify-center pb-2 ">
                <select
                  className="py-2 w-[84%]  px-2 text-white  border bg-[#5C0000]  rounded-sm"
                  onChange={HandlerForm}
                  name="Thirty"
                >
                  <option value="Mr">Mr</option>
        <option value="Miss">Miss</option>
        <option value="Mrs">Mrs</option>
        <option value="Nonbinary">Nonbinary</option>
                </select>
             </div>
                <div className=" flex justify-center pb-2">
                  <input
                    className="py-2 px-2 w-[84%]  text-white bg-transparent border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="first"
                    value={inputForm.first}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="First name..."
                  />
                </div>
                <div className=" flex justify-center">
                  <input
                    className="py-2 px-2 w-[84%]  text-white bg-transparent border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="first"
                    value={inputForm.first}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Last name..."
                  />
                </div>
               
                </div>
                <div className=" mt-2 flex  justify-end bg-[#5C0000] ">
                  <button
                    className="text-lg font-semibold"
                    onClick={(e)=>createFileFunc(e)}
                  >
                    Next
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputForm;
