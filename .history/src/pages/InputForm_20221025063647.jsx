import React, { useState, useContext } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/abstract.mp4";
import "../App.css";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { data } from "autoprefixer";
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
  const { address } = useContext(AuthContext);

  const SendFilesToIPFS = async (event) => {
    const {
      first,
      seconed,
      third,
      fourth,
      fifth,
      sixth,
      seventh,
      eighth,
      nineth,
      tenth,
      eleventh,
      tewelveth,
      thirteen,
      fourteenth,
      fifteenth,
      sixteenth,
      seventeen,
      eightheenth,
      nineteen,
      twenty,
      twentyOne,
      twentyTwo,
      twentyThree,
      twentyFour,
      twentyFive,
      twentySix,
      twentySeven,
      twentyEight,
      twentyNine,
      Thirty,
      ThirtyOne,
      ThirtyTwo,
    } = inputForm;
    event.preventDefault();
    if (
      inputForm.first != "" ||
      inputForm.seconed != "" ||
      inputForm.third != "" ||
      inputForm.fourth != "" ||
      inputForm.fifth != "" ||
      inputForm.sixth != "" ||
      inputForm.seventh != "" ||
      inputForm.eighth != "" ||
      inputForm.tenth != "" ||
      inputForm.eleventh != "" ||
      inputForm.tewelveth != "" ||
      inputForm.thirteen != "" ||
      inputForm.fourteenth != "" ||
      inputForm.fifteenth != "" ||
      inputForm.sixteenth != "" ||
      inputForm.seventeen != "" ||
      inputForm.eightheenth != "" ||
      inputForm.nineteen != "" ||
      inputForm.twenty != "" ||
      inputForm.twentyOne != "" ||
      inputForm.twentyTwo != "" ||
      inputForm.twentyThree != "" ||
      inputForm.twentyFour != "" ||
      inputForm.twentyFive != "" ||
      inputForm.twentySix != "" ||
      inputForm.twentySeven != "" ||
      inputForm.twentyEight != "" ||
      inputForm.twentyNine != "" ||
      inputForm.Thirty != "" ||
      inputForm.ThirtyOne != "" ||
      inputForm.ThirtyTwo != ""
    ) {
      try {
        toast
          .promise(
            axios({
              method: "post",
              url: `http://localhost:8000/api/v1/form/file/${address}`,
              data: {
                first,
                seconed,
                third,
                fourth,
                fifth,
                sixth,
                seventh,
                eighth,
                nineth,
                tenth,
                eleventh,
                tewelveth,
                thirteen,
                fourteenth,
                fifteenth,
                sixteenth,
                seventeen,
                eightheenth,
                nineteen,
                twenty,
                twentyOne,
                twentyTwo,
                twentyThree,
                twentyFour,
                twentyFive,
                twentySix,
                twentySeven,
                twentyEight,
                twentyNine,
                Thirty,
                ThirtyOne,
                ThirtyTwo,
              },
            }),
            {
              pending: "Uploading data to DB",
              success: "Uploaded data",
              error: "Something went wrong!",
            }
          )
          .then((res) => {
            setInputForm({
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
            console.log(" Input page responseeeeeeeeeee:  ", res);
          });
      } catch (err) {
        console.log("errrrrr", err);
        toast.error(err);
      }
    } else {
      console.log("please fill all feilds");
      toast.warn("please fill all feilds!!!");
    }
  };
  return (
    <>
      <div className="min-h-screen py-8 ">
        <video className=" form-video-bg " src={BgVideo} autoPlay muted loop />

        <div className="container mx-auto">
          <h1 className=" flex text-[#B87333] font-semibold text-3xl  justify-center">
            IP DAO
          </h1>
          <div className="flex w-full mt-6 lg:w-8/12 p-4 rounded-xl mx-auto shadow-lg overflow-hidden">
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
                    placeholder="1st"
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
                <div className="flex lg:flex-row md:flex-col inline-flex  flex-col justify-evenly  bg-transparent border border-gray-400 text-gray-400 py-1">
                
                  <label className="">Intrest</label>
                  <label className="inline-block" >Coding</label>
                  <input className="w-4 " type='checkbox' name="third"  onChange={HandlerForm}  value='inputForm.third'/>
                  <label className="" >Travelling</label>
                  <input className="w-4 " type='checkbox' name="fourth"  onChange={HandlerForm} value='inputForm.fourth'/>
                 
                  </div>

                  <div className="mt-2 grid grid-cols-5 gap-5 bg-transparent border border-gray-400 text-gray-400 py-1">
                
                  <label className="px-1 ">Language</label>
                  <label className="" >English</label>
                  <input className="w-4" type='checkbox' name="fifth"  onChange={HandlerForm}  value='inputForm.fifth'/>
                  <label className="" >Spanish</label>
                  <input className="w-4 " type='checkbox' name="sixth"  onChange={HandlerForm} value='inputForm.sixth'/>
                  </div>
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
                    name="fifteenth"
                    value={inputForm.fifteenth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="15th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="sixteenth"
                    value={inputForm.sixteenth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="16th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="seventeen"
                    value={inputForm.seventeen}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="17th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="eightheenth"
                    value={inputForm.eightheenth}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="18th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="nineteen"
                    value={inputForm.nineteen}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="19th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twenty"
                    value={inputForm.twenty}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="20th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyOne"
                    value={inputForm.twentyOne}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="21th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyTwo"
                    value={inputForm.twentyTwo}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="22th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyThree"
                    value={inputForm.twentyThree}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="23th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyFour"
                    value={inputForm.twentyFour}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="24th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyFive"
                    value={inputForm.twentyFive}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="25th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentySix"
                    value={inputForm.twentySix}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="26th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentySeven"
                    value={inputForm.twentySeven}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="27th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyEight"
                    value={inputForm.twentyEight}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="28th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="twentyNine"
                    value={inputForm.twentyNine}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="29th"
                  />
                  {/* <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="Thirty"
                    value={inputForm.Thirty}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="30th"
                  /> */}
                  <select className="py-1 px-2 text-white  border bg-transparent border-gray-400 " onChange={HandlerForm} name="Thirty">
                  <option className="bg-[#343D46] text-gray-400" disabled selected >Choose BlockChain Application</option>
                    <option className="bg-[#343D46]" value='Money Transfer'>Money Transfer</option>
                    <option className="bg-[#343D46]" value='Smart Contract'>Smart Contract </option>
                    <option className="bg-[#343D46]" value='NFT'>NFT</option>
                    <option className="bg-[#343D46]" value='Fungible Tokens'>Fungible Tokens </option>
                    <option className="bg-[#343D46]" value='Goverment'>Goverment</option>
                    <option className="bg-[#343D46]" value='Health Care '>Health Care </option>




                  </select>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <textarea
                    cols="5"
                    rows="3"
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    placeholder="31th"
                    name="ThirtyOne"
                    value={inputForm.ThirtyOne}
                    onChange={HandlerForm}
                  ></textarea>

                  {/* <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="ThirtyOne"
                    value={inputForm.ThirtyOne}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="31th"
                  /> */}
                  {/* <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="ThirtyTwo"
                    value={inputForm.ThirtyTwo}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="32th"
                  /> */}
                  <textarea
                    cols="5"
                    rows="3"
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    placeholder="32th"
                    name="ThirtyTwo"
                    value={inputForm.ThirtyTwo}
                    onChange={HandlerForm}
                  ></textarea>
                </div>
                <div className=" mt-2 grid grid-cols-1 justify-center bg-[#B87333]  hover:bg-[#c07229] ">
                  <button
                    className="text-lg font-semibold"
                    onClick={SendFilesToIPFS}
                  >
                    Submit
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
