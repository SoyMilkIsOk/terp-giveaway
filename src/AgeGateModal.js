import React, { useState } from "react";
import { useCookies } from "react-cookie";

const AgeGateModal = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showModal, setShowModal] = useState(true);

  const [cookies, setCookie] = useCookies(["ageGate"]);

  const handleSubmit = (e) => {
    const calculatedAge = calculateAge(selectedDate);
    e.preventDefault();
    if (calculatedAge >= 21) {
      setCookie("ageGate", true, {
        path: "/",
        expires: new Date(Date.now() + 2592000000),
      });
      if (cookies.ageGate) {
        setShowModal(false);
      }
    } else {
      alert("You must be at least 21 years old to proceed.");
    }
  };

  const calculateAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      {showModal && !cookies.ageGate && (
        <div className="modal-bg flex justify-center items-center fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 backdrop-blur-sm">
          <div className="modal-content bg-white p-8 rounded-lg shadow-lg text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Age Verification
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col justify-center space-y-4 my-8 text-center">
                <label htmlFor="age">Please enter your age:</label>
                <input
                  type="date"
                  id="age"
                  className="border-2 border-gray-300 p-2 rounded-xl"
                  onChange={(event) => setSelectedDate(event.target.value)}
                />
                <br />
                <button
                  type="submit"
                  className="bg-green-400 px-2 py-1 rounded-full w-1/2 mx-auto sm:mx-auto text-white font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AgeGateModal;
