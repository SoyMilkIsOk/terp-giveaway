import React, { useState } from "react";
import { useCookies } from "react-cookie";

const AgeGateModal = () => {
  const [showModal, setShowModal] = useState(true);

  const [cookies, setCookie] = useCookies(["ageGate"]);

  const handleYes = () => {
    setCookie("ageGate", true, {
      path: "/",
      expires: new Date(Date.now() + 2592000000),
    });
    setShowModal(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <>
      {showModal && !cookies.ageGate && (
        <div className="modal-bg flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm">
          <div className="modal-content bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Age Verification
            </h1>
            <div className="flex flex-col justify-center space-y-4 mt-8 text-center">
              <label htmlFor="age">Are you 21 or older?</label>
              <br />
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  onClick={handleYes}
                  className="bg-green-400 px-2 py-1 rounded-full w-1/2 mx-auto sm:mx-auto text-white font-bold"
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={handleNo}
                  className="bg-red-400 px-2 py-1 rounded-full w-1/2 mx-auto sm:mx-auto text-white font-bold"
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgeGateModal;
