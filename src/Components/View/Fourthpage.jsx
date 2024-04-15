import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons";
import Line1 from "../assets/Image/Line 1.png";
import Google from "../assets/Image/flat-color-icons_google.png";
import Facebook from "../assets/Image/Vector (2).png";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";

const Common = () => {
  return (
    <>
     <h1 className="text-h1 font-bold text-center underline mt-20 text-blues">Page 4</h1>
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
              Welcome Back
            </h1>
          </div>

          <form className="mt-3">
            <div className="mx-6 mb-6">
              <input
                type="email"
                id="email"
                className="text-h4  font-[600] bg-lightgray text-inputtext  rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Email"
                required
              />
            </div>
            <div className="mx-6 mb-6 relative">
              <input
                type="password"
                id="password"
                className="relative text-h4 font-[600] bg-lightgray text-inputtext rounded-4xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Password"
                required
              />
              <span className="absolute right-4 top-4">
                {" "}
                <FontAwesomeIcon icon={faEyeSlash} />
              </span>
            </div>

            <div className="flex items-start mx-6">
              <label
                for="remember"
                className="ms-2 text-h4 font-[500] text-inputtext dark:text-gray-300"
              >
                <a
                  href="#"
                  className="hover:underline dark:text-blue-500 underline"
                >
                  Forgot your password
                </a>
                .
              </label>
            </div>
            <div className="mt-64">
              <button
                type="submit"
                className="text-white bg-gradient-to-r from-blue-600 to-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-[600] rounded-4xl mx-6 text-h2 w-[335px] px-20 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #7B91FF 0%, #95BEFF 100%)",
                }}
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-5 flex justify-between mx-6">
            <div className="mt-3">
              <img src={Line1} alt="imagefirst" />
            </div>
            <div>Or</div>
            <div className="mt-3">
              <img src={Line1} alt="imagefirst" />
            </div>
          </div>

          <div className="flex justify-center my-8">
            <div className="w-14 h-14 border rounded-[8px] border-inputtext flex mx-3">
              <img
                src={Google}
                alt="imagefirst"
                className="m-auto items-center"
              />
            </div>
            <div className="w-14 h-14 border rounded-[8px] border-inputtext flex mx-3">
              <img
                src={Facebook}
                alt="imagefirst"
                className="m-auto items-center"
              />
            </div>
          </div>

          <div className="text-center">
            <label
              for="remember"
              className="ms-2 text-h4 font-[500] text-inputtext dark:text-gray-300 underline"
            >
              Don’t have an account yet?
              <a
                href="#"
                className="text-blues hover:underline dark:text-blue-500"
              >
                &nbsp;Create an account
              </a>
              .
            </label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
