import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBatteryFull,
  faLessThan,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faWifi, faSignal } from "@fortawesome/free-solid-svg-icons";
import Buttonimage from "../assets/Image/Group 1 (1).png";
import Purplebutton from "../assets/Image/Group 6.png";
import Icongroup from "../assets/Image/Group 5.png";

const Common = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <h1 className="text-h1 font-bold text-center underline mt-32 text-blues">
        Page 7
      </h1>
      <section className="flex justify-center my-10 font-montserrat mt-20 mb-32">
        <div className="h-[800px] w-[375px] bg-white text-black center rounded-[10px] ">
          <div className="flex justify-between mt-5">
            <div className="text-h3 font-bold text-blackt mx-8">9.41</div>
            <div className="mx-6">
              <FontAwesomeIcon icon={faSignal} className="mx-1" />
              <FontAwesomeIcon icon={faWifi} className="mx-1" />
              <FontAwesomeIcon icon={faBatteryFull} className="mx-1" />
            </div>
          </div>

          <div className="mx-6 my-6">
            <h1 className="text-h1 font-bold text-textblack leading-[24.38px]">
              <span className="rounded-[4px] bg-lightgray text-center pb-2">
                {" "}
                <FontAwesomeIcon icon={faLessThan} className="w-4 h-4 px-2" />
              </span>{" "}
              <span className="ml-16">Workout Schedule</span>
            </h1>
          </div>

          <div className="text-center mt-8">
            <FontAwesomeIcon icon={faLessThan} className="w-4 h-4 px-2" />
            &nbsp;Feb 2024&nbsp;
            <FontAwesomeIcon icon={faGreaterThan} className="w-4 h-4 px-2" />
          </div>

          <div className="flex mt-4">
            <div className="bg-bgwhite w-16 h-20 rounded-4xl text-center p-1 ml-6">
              <span className="text-h4">Sun</span>
              <br></br>
              <span className="text-h1 font-bold">5</span>
            </div>
            <div className="bg-blues w-16 h-20 rounded-4xl text-center p-1 ml-4">
              <span className="text-h4 text-bgwhite">Mon</span>
              <br></br>
              <span className="text-h1 font-bold text-bgwhite">6</span>
            </div>
            <div className="bg-bgwhite w-16 h-20 rounded-4xl text-center p-1 ml-4">
              <span className="text-h4">Tue</span>
              <br></br>
              <span className="text-h1 font-bold">7</span>
            </div>
            <div className="bg-bgwhite w-16 h-20 rounded-4xl text-center p-1 ml-4">
              <span className="text-h4">Wed</span>
              <br></br>
              <span className="text-h1 font-bold">8</span>
            </div>
            <div className="bg-bgwhite w-16 h-20 rounded-4xl text-center p-1 ml-4">
              <span className="text-h4">Thu</span>
              <br></br>
              <span className="text-h1 font-bold">9</span>
            </div>
          </div>

          <div
            className="absolute mt-20 bg-gradient-to-r text-bgwhite text-h4 rounded-[50px] py-2 px-4 ml-52"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)",
            }}
          >
            Ab Workout, 7:30am
          </div>

          <div
            className="absolute mt-[136px] bg-gradient-to-r text-bgwhite text-h4 rounded-[50px] py-2 px-4 ml-32"
            style={{
              backgroundImage:
                "linear-gradient(270deg, #D3A4F4 0%, #E9B1E0 102.35%)",
            }}
          >
            Upperbody Workout, 9am
          </div>

          <div className="absolute mt-[330px] bg-[#F1F1F1] text-textblack text-h4 rounded-[50px] py-2 px-4 ml-32">
            Lowerbody Workout, 3pm
          </div>

          <div className="absolute mt-[370px] rounded-[50px] py-2 px-4 ml-72">
            {" "}
            <img src={Purplebutton} alt="Iconimage1" />{" "}
            <FontAwesomeIcon
              icon={faPlus}
              className="text-bgwhite absolute -mt-16 w-6 h-6 ml-8 "
            />
          </div>

          <div className="text-h4 text-textblack font-bold mt-6">
            <span className="mx-6">06:00 AM</span>
            <hr className="mt-2 text-inputtext"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">07:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">08:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">09:00 AM</span>
            <hr className="text-blues mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">10:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">11:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">12:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">01:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">02:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">03:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">04:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>
          <div className="text-h4 text-textblack font-bold mt-4">
            <span className="mx-6">05:00 AM</span>
            <hr className="text-inputtext mt-2"></hr>
          </div>

          <div className="relative bg-bgwhite rounded-b-4xl mt-8 shadow-lg">
            <img
              src={Icongroup}
              alt="Iconimage1"
              className="mt-12  py-12 ml-8"
            />
          </div>

          <div className="absolute -mt-40 z-50 ml-36">
            <button className="float-right mx-6">
              <img src={Buttonimage} alt="Iconimage1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
