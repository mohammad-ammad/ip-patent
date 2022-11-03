import React, { useState } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/warp.mp4";
import "../App.css";

const InputForm = () => {
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
    seventh: "",
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
  return (
    <>
      <div className="min-h-screen py-8 ">
        <video className="form-video-bg  " src={BgVideo} autoPlay muted loop />

        <div className="container mx-auto">
          <h1 className=" flex text-white text-4xl  justify-center">
            Input form
          </h1>
          <div className="flex mt-6 w-8/12 rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="  w-full pb-5 pt-5 px-5 bg-[#373C44] rounded-xl border-2 border-[#660000] bg-opacity-90 text-white">
              <div className="mb-5">
                <img className="w-14 h-auto ml-auto" src={logo} />
              </div>
              <form action="#" className="px-3">
                <div className="grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="first"
                    value={inputForm.first}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="first"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="seconed"
                    value={inputForm.seconed}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="2nd"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="third"
                    value={inputForm.third}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="3rd"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="fourth"
                    value={inputForm.fourth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="4th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="fifth"
                    value={inputForm.fifth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="5th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="sixth"
                    value={inputForm.sixth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="6th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="seventh"
                    value={inputForm.seventh}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="7th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="eighth"
                    value={inputForm.eighth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="8th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="nineth"
                    value={inputForm.nineth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="9th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="tenth"
                    value={inputForm.tenth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="10th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="eleventh"
                    value={inputForm.eleventh}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="11th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="tewelveth"
                    value={inputForm.tewelveth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="12th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="thirteen"
                    value={inputForm.thirteen}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="13th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="fourteenth"
                    value={inputForm.fourteenth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="14th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="fifth"
                    value={inputForm.fifth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className=" mt-2 grid grid-cols-1 justify-center hover:bg-blue-600 gap-5 bg-blue-500">
                  <button className="text-lg font-semibold">Submit</button>
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