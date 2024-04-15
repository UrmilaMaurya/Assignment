import React from "react";
import Image from "../assets/Image/image 16.png";
import Iconimage1 from "../assets/Image/Group 1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
const Common = () => {
  return (
    <>
     <h1 className="text-h1 font-bold text-center underline mt-20 text-blues">Page 2</h1>
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
          <div>
            <button className="float-right mx-6 underline text-h2 font-[500] text-blue mt-2">
              Skip
            </button>
          </div>
          <div className="flex justify-center my-32">
            <img src={Image} alt="imagefirst" />
          </div>
          <div className="mx-6">
            <h1 className="text-h1 font-bold my-3 text-textblack leading-[24.38px]">
              Get Burn
            </h1>
            <p className="text-h2 text-gray leading-[19.5px] text-montserrat font-[500] mt-2">
              Let’s keep burning to achieve your goals, it hurts only
              temporarily, if you give up now you will be in pain forever
            </p>
          </div>
          <div>
            <button className="float-right mx-6 mt-32">
              <img src={Iconimage1} alt="Iconimage1" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
