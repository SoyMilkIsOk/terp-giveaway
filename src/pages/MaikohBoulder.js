import React from "react";
import "../index.css";
import profilePicture from "../profile.png";
import maikohPicture from "../maikoh.png";

const MaikohBoulder = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container mt-20 mx-auto p-4 bg-gray-100 max-w-xl rounded-2xl shadow-lg">
          <div className="flex flex-row justify-center space-x-8 mt-8">
            <img
              src={profilePicture}
              className="terp-logo w-20 h-20 rounded-full"
              alt="logo"
            />
            <span className="text-3xl font-bold text-gray-800 align-middle my-auto">
              X
            </span>
            <img
              src={maikohPicture}
              className="maikoh-logo w-20 h-20 rounded-full"
              alt="Boulder, Colorado"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4 my-8 text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Giveaway - Maikoh Boulder Entry
            </h1>
            <p>
              In order to enter the giveaway, you must be following Maikoh on
              Instagram.
            </p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded text-sm mx-auto
            ">
              <a
                href="https://www.instagram.com/maikohofficial/"
                target="_blank"
                rel="noreferrer"
              >
                Follow Maikoh on Instagram
              </a>
            </button>
            <p>
              To confirm entry, please provide your Instagram username below.
            </p>
          </div>
          <form
            className="Form w-full justify-center items-center"
            name="giveaway-maikoh-boulder"
            method="POST"
          >
            <input
              type="hidden"
              name="form-name"
              value="giveaway-maikoh-boulder"
            />
            <div className="flex flex-row justify-center space-x-2">
              <input
                type="text"
                className="border-2 border-gray-300 p-2 rounded-lg"
                name="username"
                placeholder="Instagram Username"
              />
              <button
                type="submit"
                className="bg-green-400 px-2 py-1 rounded-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </header>
    </div>
  );
};

export default MaikohBoulder;
