import React, { useState } from "react";
import logo from "../assets/mini_1.png";
import BgVideo from "../assets/bkg/warp.mp4";
import "../App.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const [mintStatus, setMintStatus] = useState(false);
  const [uploadinfile, setUploadingFile] = useState(false);
  const HandlerForm = (e) => {
    setInputForm({
      ...inputForm,
      [e.target.name]: e.target.value,
    });
  };

  const SendFilesToIPFS = async (event) => {
    // const { first, ...en } = inputForm;
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
        // const formData = new FormData();
        
        const metadata = {
          first: first,
          seconed: seconed,
          third: third,
          fourth: fourth,
          fifth: fifth,
          sixth: sixth,
          seventh: seventh,
          eighth: eighth,
          nineteen: nineth,
          tenth: tenth,
          eleventh: eleventh,
          tewelveth: tewelveth,
          thirteen: thirteen,
          fourteenth: fourteenth,
          fifteenth: fifteenth,
          sixteenth: sixteenth,
          seventeen: seventeen,
          eightheenth: eightheenth,
          nineteen: nineteen,
          twenty: twenty,
          twentyOne: twentyOne,
          twentyTwo: twentyTwo,
          twentyThree: twentyThree,
          twentyFour: twentyFour,
          twentyFive: twentyFive,
          twentySix: twentySix,
          twentySeven: twentySeven,
          twentyEight: twentyEight,
          twentyNine: twentyNine,
          Thirty: Thirty,
          ThirtyOne: ThirtyOne,
          ThirtyTwo: ThirtyTwo,
        };
        // setInputForm({
        //     first:"",
        //   seconed:"",
        //   third:"",
        //   fourth:"",
        //   fifth:"",
        //   sixth:"",
        //   seventh:"",
        //   eighth:"",
        //   nineteen:"",
        //   tenth:"",
        //   eleventh:"",
        //   tewelveth:"",
        //   thirteen:"",
        //   fourteenth:"",
        //   fifteenth:"",
        //   sixteenth:"",
        //   seventeen:"",
        //   eightheenth:"",
        //   nineteen:"",
        //   twenty:"",
        //   twentyOne:"",
        //   twentyTwo:"",
        //   twentyThree:"",
        //   twentyFour:"",
        //   twentyFive:"",
        //   twentySix:"",
        //   twentySeven:"",
        //   twentyEight:"",
        //   twentyNine:"",
        //   Thirty:"",
        //   ThirtyOne:"",
        //   ThirtyTwo:""
        // });

        // formData.append("text", first);
        // formData.append("text", inputForm.seconed);
        // formData.append("text", inputForm.third);
        // formData.append("text", inputForm.fourth);
        // formData.append("text", inputForm.fifth);
        // formData.append("text", inputForm.sixth);
        // formData.append("text", inputForm.seventh);
        // formData.append("text", inputForm.eighth);
        // formData.append("text", inputForm.nineth);
        // formData.append("text", inputForm.tenth);
        // formData.append("text", inputForm.eleventh);
        // formData.append("text", inputForm.tewelveth);
        // formData.append("text", inputForm.thirteen);
        // formData.append("text", inputForm.fourteenth);
        // formData.append("text", inputForm.fifteenth);
        // formData.append("text", inputForm.sixteenth);
        // formData.append("text", inputForm.seventeen);
        // formData.append("text", inputForm.eightheenth);
        // formData.append("text", inputForm.nineteen);
        // formData.append("text", inputForm.twenty);
        // formData.append("text", inputForm.twentyOne);
        // formData.append("text", inputForm.twentyTwo);
        // formData.append("text", inputForm.twentyTwo);
        // formData.append("text", inputForm.twentyThree);
        // formData.append("text", inputForm.twentyFour);
        // formData.append("text", inputForm.twentyFive);
        // formData.append("text", inputForm.twentySix);
        // formData.append("text", inputForm.twentySeven);
        // formData.append("text", inputForm.twentyEight);
        // formData.append("text", inputForm.twentyNine);
        // formData.append("text", inputForm.Thirty);
        // formData.append("text", inputForm.ThirtyOne);
        // formData.append("text", inputForm.ThirtyTwo);
        toast
          .promise(
            axios({
              method: "post",
              url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
              data: JSON.stringify(metadata),
              headers: {
                pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
                pinata_secret_api_key: `${process.env.REACT_APP_PINATA_API_SECRET}`,
                "Content-Type": "application/json",
              },
            })
          )
          .then((res) => {
            // mintItem(`https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`);

            console.log("responseeeeeeeeeee:  ", res);
            // setMintingStatus(false);
          });
        // const fileHash = `ipfs://${resFile.data.IpfsHash}`;
        // console.log("resssssssssss:",fileHash);
      } catch (error) {
        console.log("errrrrr", error);
      }
    } else {
      console.log("please fill all feilds");
    }
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
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="Thirty"
                    value={inputForm.Thirty}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="30th"
                  />
                </div>
                <div className="mt-2 grid grid-cols-2 gap-5">
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="ThirtyOne"
                    value={inputForm.ThirtyOne}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="31th"
                  />
                  <input
                    className="py-1 px-2 text-white bg-transparent border border-gray-400"
                    name="ThirtyTwo"
                    value={inputForm.ThirtyTwo}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="32th"
                  />
                </div>
                <div className=" mt-2 grid grid-cols-1 justify-center hover:bg-blue-600 gap-5 bg-blue-500">
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
