import React from "react";

function Form() {
  return (
    <div className="w-1/3 bg-gray-200 rounded-3xl shadow-2xl">
      <h2 className="p-8 text-xl text-gray-600 font-semibold capitalize tracking-wide">
        sign up
      </h2>
      <form className="bg-white p-8 rounded-3xl">
        <div className="flex flex-col my-3">
          <labe className="capitalize text-lg text-blue-800 text-opacity-60">
            full name
          </labe>
          <input
            className="w-full bg-none py-2 border-b-2 border-gray-400 focus:outline-none"
            placeholder="Enter your Name"
          />
        </div>

        <div className="flex flex-col my-3">
          <labe className="capitalize text-lg text-blue-800 text-opacity-60">
            email
          </labe>
          <input
            className="w-full bg-none py-2 border-b-2 border-gray-400 focus:outline-none"
            placeholder="example@gmail.com"
          />
        </div>

        <div className="flex flex-col my-3">
          <labe className="capitalize text-lg text-blue-800 text-opacity-60">
            password
          </labe>
          <input
            className="w-full bg-none py-2 border-b-2 border-gray-400 focus:outline-none"
            placeholder="Enter your Password"
          />
        </div>
        <button className="text-center bg-blue-600 text-white py-2 w-full rounded-md mt-5 capitalize">
          sign up
        </button>
        <p className="text-center text-sm my-7 tracking-wider text-blue-800 text-opacity-80">
          Have an account ?
        </p>
      </form>
    </div>
  );
}

export default Form;
