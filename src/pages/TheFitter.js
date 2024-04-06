import React from "react";
import "../index.css";
import profilePicture from "../profile.png";

const MaikohBoulder = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container mt-20 mx-auto p-4 bg-gray-100 max-w-xl rounded-2xl shadow-lg">
          <img
            src={profilePicture}
            className="App-logo w-20 h-20 rounded-full mx-auto"
            alt="logo"
          />
          <h1>Giveaway - The Fitter Entry</h1>
          <p>
            Welcome to the giveaway page! We are giving away a free pair of
            shoes to a lucky winner. To enter, simply click the button below.
          </p>
          <form
            className="Form w-full justify-center items-center"
            name="giveaway-fitter"
            method="POST"
          >
            <input type="hidden" name="form-name" value="giveaway-fitter" />
            <div className="flex flex-row justify-center space-x-2">
              <label>
                Instagram Username:
                <input
                  type="text"
                  className="border-2 border-gray-300 p-2 rounded-lg"
                  name="username"
                />
              </label>
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
