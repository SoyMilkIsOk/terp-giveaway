import React from "react";
import { useState } from "react";
import "./index.css";
import profilePicture from "./profile.png";
import maikohPicture from "./maikoh.png";
import fitterPicture from "./fitter.png";
import { Instagram, Check } from "lucide-react";
import AgeGateModal from "./AgeGateModal";

const Giveaway = () => {
  const [followed, setFollowed] = useState(false);
  return (
    <>
      <AgeGateModal />
      {/* main giveaway */}
      <div className="App">
        <div className="container mt-8 sm:mt-20 mb-4 mx-auto p-4 bg-gray-100 sm:max-w-xl max-w-xs rounded-2xl shadow-lg">
          <img
            src={profilePicture}
            className="terp-logo w-20 h-20 rounded-full my-8 mx-auto"
            alt="logo"
          />
          <div className="flex flex-row justify-center space-x-8 mt-8">
            <img
              src={maikohPicture}
              className="maikoh-logo w-20 h-20 rounded-full"
              alt="Boulder, Colorado"
            />
            <span className="text-3xl font-bold text-gray-800">X</span>
            <img
              src={fitterPicture}
              className="fitter-logo w-20 h-20 rounded-full"
              alt="Boulder, Colorado"
            />
          </div>
          <div className="flex flex-col justify-center space-y-2 my-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Terpscoop 4/20 Giveaway
            </h1>
          </div>
          <div className="flex flex-col justify-center space-y-2 my-8 text-center">
            <p className="max-w-md sm:max-w-xl mx-auto text-center">
              In order to enter the main giveaway, you must be following
              Terpscoops.
            </p>
            <button
              className={`${
                followed
                  ? "bg-green-400 px-4 py-2 rounded-full my-auto mx-0 sm:mx-auto text-white font-bold"
                  : "bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded-full mx-auto"
              }`}
              onClick={() => setFollowed(~followed)}
            >
              <a
                href="https://www.instagram.com/terpscoops/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="flex flex-row justify-center items-center space-x-2">
                  <p>Follow Terpscoops</p>
                  {!followed ? <Instagram /> : <Check />}
                </div>
              </a>
            </button>
          </div>
          <div className="flex flex-col justify-center space-y-2 my-8 text-center">
            <p className="max-w-md sm:max-w-xl mx-auto text-center">
              To confirm entry, please provide your Instagram username below.
            </p>
            <form
              className="Form w-full justify-center items-center"
              name="giveaway-main"
              method="POST"
            >
              <input type="hidden" name="form-name" value="giveaway-main" />
              <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-2 sm:space-y-0 space-y-4">
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 rounded-xl"
                  name="username"
                  placeholder="Instagram Username"
                />
                <button
                  type="submit"
                  className="bg-green-400 px-2 py-1 rounded-full sm:w-1/6 w-1/2 my-auto mx-0 sm:mx-auto text-white font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Giveaway;
