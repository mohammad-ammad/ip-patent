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
    gender: "",
    first_name: "",
    last_name: "",
    metamask: "",
    email: "",
    phone: "",
    username: "",
    user_password: "",
    country: "",
    city: "",
    address: "",
    zip_code: "",
    dob: "",
    trade_mark: "",
    good_bad_review: "",
    is_have_patent: "",
    generic_title: "",
    purpose: "",
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
  const[nextPreState,setNextPreState]=useState(0);
  const Next=()=>{
    setNextPreState(nextPreState+1);
  }
  const Previous=()=>{
    setNextPreState(nextPreState-1);
  }
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
             
      <div class="flex justify-center  flex-col">
        {nextPreState==0?
        <>
        <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm ">For your name, use the name on your driver’s license or other permanent documentation.</p>
      <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                <select
                  className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-white  border bg-[#5C0000]  rounded-sm"
                  onChange={HandlerForm}
                  name="gender"
                >
                  <option disabled selected value="" >gender</option>
                  <option value="Mr">Mr</option>
                 <option value="Miss">Miss</option>
                 <option value="Mrs">Mrs</option>
                 <option value="Nonbinary">Nonbinary</option>
                </select>
             </div>
                <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="first_name"
                    value={inputForm.first_name}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="First name..."
                  />
                </div>
                <div className=" flex md:justify-center lg:justify-center   sm:justify-start">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="last_name"
                    value={inputForm.last_name}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Last name..."
                  />
                </div>
                </>:nextPreState==1?
                <>
        <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm  ">Contact info.</p>
        <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="metamask"
                    value={inputForm.metamask}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Put your Metamask address here"
                  />
                </div>
                <div className=" flex md:justify-center lg:justify-center   sm:justify-start">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="email"
                    value={inputForm.email}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="E-mail..."
                  />
                </div>
                <div className=" py-2 flex md:justify-center lg:justify-center   sm:justify-start">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="phone"
                    value={inputForm.phone}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Phone..."
                  />
                </div>
                </>:nextPreState==2?
                <>
                 <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm ">Login Info.</p>
        <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="username"
                    value={inputForm.username}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="UserName..."
                  />
                </div>
                <div className=" flex md:justify-center lg:justify-center   sm:justify-start">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="user_password"
                    value={inputForm.user_password}
                    onChange={HandlerForm}
                    type="password"
                    placeholder="Password..."
                  />
                </div>
                </>:nextPreState==3?
                <>
                 <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm">Your location .</p>
      <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                <select
                  className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-white  border bg-[#5C0000]  rounded-sm"
                  onChange={HandlerForm}
                  name="country"
                >
                  {/* <option disabled selected value="" >Country</option> */}
        <option value="AF">Afghanistan</option>
        <option value="AL">Albania</option>
        <option value="DZ">Algeria</option>
        <option value="AS">American Samoa</option>
        <option value="AD">Andorra</option>
        <option value="AG">Angola</option>
        <option value="AI">Anguilla</option>
        <option value="AG">Antigua &amp; Barbuda</option>
        <option value="AR">Argentina</option>
        <option value="AA">Armenia</option>
        <option value="AW">Aruba</option>
        <option value="AU">Australia</option>
        <option value="AT">Austria</option>
        <option value="AZ">Azerbaijan</option>
        <option value="BS">Bahamas</option>
        <option value="BH">Bahrain</option>
        <option value="BD">Bangladesh</option>
        <option value="BB">Barbados</option>
        <option value="BY">Belarus</option>
        <option value="BE">Belgium</option>
        <option value="BZ">Belize</option>
        <option value="BJ">Benin</option>
        <option value="BM">Bermuda</option>
        <option value="BT">Bhutan</option>
        <option value="BO">Bolivia</option>
        <option value="BL">Bonaire</option>
        <option value="BA">Bosnia &amp; Herzegovina</option>
        <option value="BW">Botswana</option>
        <option value="BR">Brazil</option>
        <option value="BC">British Indian Ocean Ter</option>
        <option value="BN">Brunei</option>
        <option value="BG">Bulgaria</option>
        <option value="BF">Burkina Faso</option>
        <option value="BI">Burundi</option>
        <option value="KH">Cambodia</option>
        <option value="CM">Cameroon</option>
        <option value="CA">Canada</option>
        <option value="IC">Canary Islands</option>
        <option value="CV">Cape Verde</option>
        <option value="KY">Cayman Islands</option>
        <option value="CF">Central African Republic</option>
        <option value="TD">Chad</option>
        <option value="CD">Channel Islands</option>
        <option value="CL">Chile</option>
        <option value="CN">China</option>
        <option value="CI">Christmas Island</option>
        <option value="CS">Cocos Island</option>
        <option value="CO">Colombia</option>
        <option value="CC">Comoros</option>
        <option value="CG">Congo</option>
        <option value="CK">Cook Islands</option>
        <option value="CR">Costa Rica</option>
        <option value="CT">Cote D'Ivoire</option>
        <option value="HR">Croatia</option>
        <option value="CU">Cuba</option>
        <option value="CB">Curacao</option>
        <option value="CY">Cyprus</option>
        <option value="CZ">Czech Republic</option>
        <option value="DK">Denmark</option>
        <option value="DJ">Djibouti</option>
        <option value="DM">Dominica</option>
        <option value="DO">Dominican Republic</option>
        <option value="TM">East Timor</option>
        <option value="EC">Ecuador</option>
        <option value="EG">Egypt</option>
        <option value="SV">El Salvador</option>
        <option value="GQ">Equatorial Guinea</option>
        <option value="ER">Eritrea</option>
        <option value="EE">Estonia</option>
        <option value="ET">Ethiopia</option>
        <option value="FA">Falkland Islands</option>
        <option value="FO">Faroe Islands</option>
        <option value="FJ">Fiji</option>
        <option value="FI">Finland</option>
        <option value="FR">France</option>
        <option value="GF">French Guiana</option>
        <option value="PF">French Polynesia</option>
        <option value="FS">French Southern Ter</option>
        <option value="GA">Gabon</option>
        <option value="GM">Gambia</option>
        <option value="GE">Georgia</option>
        <option value="DE">Germany</option>
        <option value="GH">Ghana</option>
        <option value="GI">Gibraltar</option>
        <option value="GB">Great Britain</option>
        <option value="GR">Greece</option>
        <option value="GL">Greenland</option>
        <option value="GD">Grenada</option>
        <option value="GP">Guadeloupe</option>
        <option value="GU">Guam</option>
        <option value="GT">Guatemala</option>
        <option value="GN">Guinea</option>
        <option value="GY">Guyana</option>
        <option value="HT">Haiti</option>
        <option value="HW">Hawaii</option>
        <option value="HN">Honduras</option>
        <option value="HK">Hong Kong</option>
        <option value="HU">Hungary</option>
        <option value="IS">Iceland</option>
        <option value="IN">India</option>
        <option value="ID">Indonesia</option>
        <option value="IA">Iran</option>
        <option value="IQ">Iraq</option>
        <option value="IR">Ireland</option>
        <option value="IM">Isle of Man</option>
        <option value="IL">Israel</option>
        <option value="IT">Italy</option>
        <option value="JM">Jamaica</option>
        <option value="JP">Japan</option>
        <option value="JO">Jordan</option>
        <option value="KZ">Kazakhstan</option>
        <option value="KE">Kenya</option>
        <option value="KI">Kiribati</option>
        <option value="NK">Korea North</option>
        <option value="KS">Korea South</option>
        <option value="KW">Kuwait</option>
        <option value="KG">Kyrgyzstan</option>
        <option value="LA">Laos</option>
        <option value="LV">Latvia</option>
        <option value="LB">Lebanon</option>
        <option value="LS">Lesotho</option>
        <option value="LR">Liberia</option>
        <option value="LY">Libya</option>
        <option value="LI">Liechtenstein</option>
        <option value="LT">Lithuania</option>
        <option value="LU">Luxembourg</option>
        <option value="MO">Macau</option>
        <option value="MK">Macedonia</option>
        <option value="MG">Madagascar</option>
        <option value="MY">Malaysia</option>
        <option value="MW">Malawi</option>
        <option value="MV">Maldives</option>
        <option value="ML">Mali</option>
        <option value="MT">Malta</option>
        <option value="MH">Marshall Islands</option>
        <option value="MQ">Martinique</option>
        <option value="MR">Mauritania</option>
        <option value="MU">Mauritius</option>
        <option value="ME">Mayotte</option>
        <option value="MX">Mexico</option>
        <option value="MI">Midway Islands</option>
        <option value="MD">Moldova</option>
        <option value="MC">Monaco</option>
        <option value="MN">Mongolia</option>
        <option value="MS">Montserrat</option>
        <option value="MA">Morocco</option>
        <option value="MZ">Mozambique</option>
        <option value="MM">Myanmar</option>
        <option value="NA">Nambia</option>
        <option value="NU">Nauru</option>
        <option value="NP">Nepal</option>
        <option value="AN">Netherland Antilles</option>
        <option value="NL" selected>Netherlands (Holland, Europe)</option>
        <option value="NV">Nevis</option>
        <option value="NC">New Caledonia</option>
        <option value="NZ">New Zealand</option>
        <option value="NI">Nicaragua</option>
        <option value="NE">Niger</option>
        <option value="NG">Nigeria</option>
        <option value="NW">Niue</option>
        <option value="NF">Norfolk Island</option>
        <option value="NO">Norway</option>
        <option value="OM">Oman</option>
        <option value="PK">Pakistan</option>
        <option value="PW">Palau Island</option>
        <option value="PS">Palestine</option>
        <option value="PA">Panama</option>
        <option value="PG">Papua New Guinea</option>
        <option value="PY">Paraguay</option>
        <option value="PE">Peru</option>
        <option value="PH">Philippines</option>
        <option value="PO">Pitcairn Island</option>
        <option value="PL">Poland</option>
        <option value="PT">Portugal</option>
        <option value="PR">Puerto Rico</option>
        <option value="QA">Qatar</option>
        <option value="ME">Republic of Montenegro</option>
        <option value="RS">Republic of Serbia</option>
        <option value="RE">Reunion</option>
        <option value="RO">Romania</option>
        <option value="RU">Russia</option>
        <option value="RW">Rwanda</option>
        <option value="NT">St Barthelemy</option>
        <option value="EU">St Eustatius</option>
        <option value="HE">St Helena</option>
        <option value="KN">St Kitts-Nevis</option>
        <option value="LC">St Lucia</option>
        <option value="MB">St Maarten</option>
        <option value="PM">St Pierre &amp; Miquelon</option>
        <option value="VC">St Vincent &amp; Grenadines</option>
        <option value="SP">Saipan</option>
        <option value="SO">Samoa</option>
        <option value="AS">Samoa American</option>
        <option value="SM">San Marino</option>
        <option value="ST">Sao Tome &amp; Principe</option>
        <option value="SA">Saudi Arabia</option>
        <option value="SN">Senegal</option>
        <option value="RS">Serbia</option>
        <option value="SC">Seychelles</option>
        <option value="SL">Sierra Leone</option>
        <option value="SG">Singapore</option>
        <option value="SK">Slovakia</option>
        <option value="SI">Slovenia</option>
        <option value="SB">Solomon Islands</option>
        <option value="OI">Somalia</option>
        <option value="ZA">South Africa</option>
        <option value="ES">Spain</option>
        <option value="LK">Sri Lanka</option>
        <option value="SD">Sudan</option>
        <option value="SR">Suriname</option>
        <option value="SZ">Swaziland</option>
        <option value="SE">Sweden</option>
        <option value="CH">Switzerland</option>
        <option value="SY">Syria</option>
        <option value="TA">Tahiti</option>
        <option value="TW">Taiwan</option>
        <option value="TJ">Tajikistan</option>
        <option value="TZ">Tanzania</option>
        <option value="TH">Thailand</option>
        <option value="TG">Togo</option>
        <option value="TK">Tokelau</option>
        <option value="TO">Tonga</option>
        <option value="TT">Trinidad &amp; Tobago</option>
        <option value="TN">Tunisia</option>
        <option value="TR">Turkey</option>
        <option value="TU">Turkmenistan</option>
        <option value="TC">Turks &amp; Caicos Is</option>
        <option value="TV">Tuvalu</option>
        <option value="UG">Uganda</option>
        <option value="UA">Ukraine</option>
        <option value="AE">United Arab Emirates</option>
        <option value="GB">United Kingdom</option>
        <option value="US">United States of America</option>
        <option value="UY">Uruguay</option>
        <option value="UZ">Uzbekistan</option>
        <option value="VU">Vanuatu</option>
        <option value="VS">Vatican City State</option>
        <option value="VE">Venezuela</option>
        <option value="VN">Vietnam</option>
        <option value="VB">Virgin Islands (Brit)</option>
        <option value="VA">Virgin Islands (USA)</option>
        <option value="WK">Wake Island</option>
        <option value="WF">Wallis &amp; Futana Is</option>
        <option value="YE">Yemen</option>
        <option value="ZR">Zaire</option>
        <option value="ZM">Zambia</option>
        <option value="ZW">Zimbabwe</option>
                </select>
             </div>
                <div className=" flex md:justify-center lg:justify-center  sm:justify-start pb-2">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="city"
                    value={inputForm.city}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="City..."
                  />
                </div>
                <div className=" flex md:justify-center lg:justify-center   sm:justify-start">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="address"
                    value={inputForm.address}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Address..."
                  />
                </div>
                <div className=" flex md:justify-center lg:justify-center py-2  sm:justify-start">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="zip_code"
                    value={inputForm.zip_code}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Zipcode..."
                  />
                </div>
                </>:nextPreState==4?
                <>
              <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm ">Birthday.</p>
              <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
              <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]   text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="dob"
                    value={inputForm.dob}
                    onChange={HandlerForm}
                    type="date"
                    placeholder=""
                  />
        </div>

                </>:nextPreState==5?
                <>
                  <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm">Do you have a trademark?:
                  <br></br>If you have thought of a brand name (trademark) to call it (such as “Easy Seat”), do not use it anywhere in this template. Using it can fatally flaw the application’s disclosure.<br></br>Rather just answer yes or no below!
                  </p>
      <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                <select
                  className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-white  border bg-[#5C0000]  rounded-sm"
                  onChange={HandlerForm}
                  name="trade_mark"
                >
                  <option disabled selected value="" >Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
             </div>
                </>:nextPreState==6?
                <>
                  <p className="flex sm:justify-center  md:justify-start lg:justify-start  lg:px-16  font-bold text-sm">Is it a goods or a service? Please check the Class list definitions:<a className="   text-[#5C0000]" href="https://www.nolo.com/legal-encyclopedia/trademark-classes.html" target="blank">Here</a>.
                  Choose 46 if nothing similar in list.
                  </p>
      <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                <select
                  className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-white  border bg-[#5C0000]  rounded-sm"
                  onChange={HandlerForm}
                  name="good_bad_review"
                >
                  <option disabled selected value="" >Good|Bad</option>
                  <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="10">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="10">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
          <option value="46">46</option>
                </select>
             </div>
                </>:nextPreState==7?
                <>
                 <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm">Do you own the patentrights?:  
                  </p>
      <div className=" flex md:justify-center lg:justify-center  sm:justify-start  pb-2 ">
                <select
                  className="py-2 md:w-[84%] w-full lg:w-[84%]  px-2 text-white  border bg-[#5C0000]  rounded-sm"
                  onChange={HandlerForm}
                  name="is_have_patent"
                >
                  <option disabled selected value="" >Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
             </div>
                </>:nextPreState==8?
                <>
                 <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm ">Insert very brief generic title; example – Seating Device:</p>
        <div className=" flex flex-col sm:justify-center md:justify-start  md:px-16 lg:px-16 pb-2">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="generic_title"
                    value={inputForm.generic_title}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="Insert very brief generic title; example – Seating Device"
                  />
                 <p className="flex flex-col sm:justify-center md:justify-start    font-bold text-sm ">What is the purpose of your Invention?:</p>
                 <textarea
                    cols="5"
                    rows="5"
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="purpose"
                    value={inputForm.purpose}
                    onChange={HandlerForm}
                    placeholder="Purpose of invention..."
                  ></textarea>
                </div>
                </>:nextPreState==9?
                <>
                  <p className="flex sm:justify-center md:justify-start  md:px-16 lg:px-16  font-bold text-sm ">explain why this invention is needed; what is currently lacking in this field</p>
        <div className=" flex flex-col sm:justify-center md:justify-start  md:px-16 lg:px-16 pb-2">
                  <input
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="purpose_invention"
                    value={purpose_invention}
                    onChange={HandlerForm}
                    type="text"
                    placeholder="1 to 5 words description of the purpose of your invention"
                  />
                 <p className="flex flex-col sm:justify-center md:justify-start    font-bold text-sm ">explain why this invention is needed; what is currently lacking in this field</p>
                 <textarea
                    cols="5"
                    rows="5"
                    className="py-2 px-2 md:w-[84%] w-full lg:w-[84%]  text-white  border border-gray-400 rounded-sm bg-[#5C0000]"
                    name="purpose"
                    value={inputForm.purpose}
                    onChange={HandlerForm}
                    placeholder="insert  a brif general ..."
                  ></textarea>
                </div>
                </>:nextPreState==10?
                <>
                
                </>:nextPreState==11?
                <>
                
                </>:nextPreState==12?
                <>
                
                </>:nextPreState==13?
                <>
                
                </>:''

        }
                </div>
        
               
                <div className=" mt-2 flex flex-col md:flex-row lg:flex-row   justify-evenly lg:justify-end md:justify-end   sm:w-full lg:w-full md:w-full   ">
                  {
                    nextPreState>0?<>
                <button
                    className="text-lg font-semibold  bg-[#5C0000]  md:w-[15%] lg:w-[15%] w-full py-2 sm:mr-24 md:mr-2"
                    onClick={Previous}
                  >
                    Previous
                  </button>
                   <button
                   className="text-lg font-semibold  bg-[#5C0000] md:w-[10%] lg:w-[10%] lg:mt-0 md:mt-0 mt-2 w-full py-2  mr-14 "
                   onClick={Next}
                 >
                   Next
                 </button></>
                 : <button
                    className="text-lg font-semibold  bg-[#5C0000] w-[10%] py-2 mr-14 "
                    onClick={Next}
                  >
                    Next
                  </button>
}
                </div>
                  {/* Circles which indicates the steps of the form:  */}
      <div className="text-center mt-[20px] ">
        {
          nextPreState==0?
        <span className="h-[15px] w-[15px] mr-[4px]  bg-[#5C0000]    rounded-[50%] inline-block "></span>
        :
        <span className="h-[15px] w-[15px] mr-[4px]  bg-white  opacity-[0.5] rounded-[50%] inline-block "></span>
        }
        {
          nextPreState==1?
        <span className="h-[15px] w-[15px] mr-[4px]  bg-[#5C0000] rounded-[50%] inline-block "></span>
       
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white opacity-[0.5] rounded-[50%] inline-block "></span>
        
      }
      {
       nextPreState==2?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]  rounded-[50%] inline-block "></span>
      :<span className="h-[15px] w-[15px] mr-[4px] bg-white opacity-[0.5] rounded-[50%] inline-block "></span>
       
      }
      {
        nextPreState==3?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
          {
        nextPreState==4?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
          {
        nextPreState==5?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==6?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==7?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==8?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==9?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==10?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==11?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==12?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==13?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==14?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==15?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==16?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }
         {
        nextPreState==17?
        <span className="h-[15px] w-[15px] mr-[4px] bg-[#5C0000]   rounded-[50%] inline-block"></span>
       : <span className="h-[15px] w-[15px] mr-[4px] bg-white  opacity-[0.5] rounded-[50%] inline-block"></span>
      
      }

     
     
        </div>
                
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputForm;
