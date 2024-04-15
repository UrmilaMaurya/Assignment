import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { faWifi, faSignal } from "@fortawesome/free-solid-svg-icons";
import Buttonimage from "../assets/Image/Group 1 (1).png";
import Chart from "../assets/Image/Chart Full (1).png";
import Alert from "../assets/Image/alert-triangle.png";
import Elipse53 from "../assets/Image/Ellipse 53.png";
import Elipse54 from "../assets/Image/Ellipse 54.png";
import Elipse55 from "../assets/Image/Ellipse 55 .png";
import Icongroup from "../assets/Image/Group 5.png";

const Common = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
     <h1 className="text-h1 font-bold text-center underline mt-20 text-blues">Page 6</h1>
      <section className="flex justify-center my-10 font-montserrat">
        <div className="h-[800px] w-[375px] bg-white text-black center rounded-[10px] ">
          <div className="flex justify-between mt-5">
            <div className="text-h3 font-bold text-blackt mx-8">9.41</div>
            <div className="mx-6">
              <FontAwesomeIcon icon={faSignal} className="mx-1" />
              <FontAwesomeIcon icon={faWifi} className="mx-1" />
              <FontAwesomeIcon icon={faBatteryFull} className="mx-1" />
            </div>
          </div>

          <div className="mx-6 my-10">
            <h1 className="text-h1 font-bold my-3 text-textblack leading-[24.38px]">
              <span className="rounded-[4px] bg-lightgray text-center pb-2">
                {" "}
                <FontAwesomeIcon icon={faLessThan} className="w-4 h-4 px-2" />
              </span>{" "}
              <span className="ml-16">Workout Tracker</span>
            </h1>
          </div>

          <div>
            <span className="text-h4 ml-40">Good job</span>
            <span className="text-h4 ml-16">less then 320cal</span>
          </div>

          <span className="text-h4 ml-48">!</span>
          <span className="text-h4 ml-32">!</span>

          <div className="flex justify-center">
            <img src={Chart} alt="imagefirst" />
          </div>

          <form className="mt-4">
            <div className="mx-6 mb-4 relative">
              <div
                className="relative text-h4 font-[600] bg-gradient-to-r text-inputtext rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full p-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                style={{
                  backgroundImage:
                    "linear-gradient(90.07deg, rgba(129, 157, 255, 0.28) 5.94%, rgba(16, 16, 16, 0) 76.45%)",
                }}
              ></div>
              <span className="absolute left-4 top-6 ">
                <img src={Alert} alt="imagefirst" />
              </span>
              <span className="absolute left-12 top-4 right-12 text-h4 font-[600] text-textblack">
                You've burned fewer calories than yesterday. Time to get moving!
              </span>
              <span className="absolute right-4 top-4"></span>
            </div>

            <div className="flex justify-between mx-6 mt-14">
              <div className="text-h2 text-textblack font-bold">
                Upcoming Workout
              </div>
              <div>
                <button className="hover:underline text-h4 font-[500] text-inputtext">
                  See more
                </button>
              </div>
            </div>

            <div className="mx-6 mb-2 relative mt-5 shadow-lg rounded-4xl">
              <div
                className="relative text-h4 font-[600] bg-bgwhite text-inputtext rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full p-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
              ></div>
              <span className="absolute left-4 top-6 ">
                <img src={Elipse53} alt="imagefirst" />
              </span>
              <span className="absolute left-20 top-8 right-12 text-h4 font-[600] text-textblack">
                &nbsp;&nbsp;Full Body Workout
                <br></br>&nbsp;&nbsp;
                <span className="text-h5 text-inputtext">Today 3pm</span>
              </span>
              <span className="absolute right-16 top-10">
                <button
                  className="w-12 h-6 rounded-4xl bg-blues absolute"
                  onClick={toggleCheckbox}
                >
                  <div
                    className={`w-5 h-5 bg-white ml-1 rounded-4xl shadow-md transform duration-300 ${
                      isChecked ? "translate-x-full" : ""
                    }`}
                  ></div>
                </button>
              </span>
            </div>

            <div className="mx-6 mb-6 relative mt-5 shadow-lg rounded-4xl">
              <div
                className="relative text-h4 font-[600] bg-bgwhite text-inputtext rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full p-12 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              ></div>
              <span className="absolute left-4 top-6 ">
                <img src={Elipse54} alt="imagefirst" />
              </span>
              <span className="absolute left-20 top-8 right-12 text-h4 font-[600] text-textblack">
                &nbsp;&nbsp;Upper Body Workout
                <br></br>&nbsp;&nbsp;
                <span className="text-h5 text-inputtext">4 Feb, 3:30 pm</span>
              </span>
              <span className="absolute right-16 top-10">
                <button
                  className="w-12 h-6 rounded-4xl bg-blues absolute"
                  onClick={toggleCheckbox}
                >
                  <div
                    className={`w-5 h-5 bg-white ml-1 rounded-4xl shadow-md transform duration-300 ${
                      isChecked ? "translate-x-full" : ""
                    }`}
                  ></div>
                </button>
              </span>
            </div>

            <div className="text-h2 text-textblack font-bold mx-6">
              What Do You Want to Train
            </div>

            <div className="relative z-50 mx-6 mb-6 mt-2">
              <div className="relative text-h4 font-[600] bg-blues bg-opacity-60 text-inputtext rounded-t-4xl focus:ring-blue-500 focus:border-blue-500 block w-full p-10 "></div>

              <span className="absolute left-4 top-4 right-12 text-h4 font-[600] text-textblack">
                Full Body Workout
                <br></br>
                <span className="text-h5 ">Arms</span>
                <br></br>
                <span className="text-h5 ">Chest</span>
              </span>
              <div className="absolute right-4 top-[15px]">
                <img src={Elipse55} alt="Iconimage1" />
              </div>
            </div>

            <div className="relative bg-bgwhite  -mt-14 rounded-b-4xl shadow-lg">
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
          </form>
        </div>
      </section>
    </>
  );
};

export default Common;
