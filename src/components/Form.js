import React, { useState, useEffect } from "react";

const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

function Form() {
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  useEffect(() => {
    const valid = NAME_REGEX.test(name);
    setValidName(valid);
  }, [name]);

  useEffect(() => {
    const valid = EMAIL_REGEX.test(email);
    setValidEmail(valid);
  }, [email]);

  useEffect(() => {
    const valid = PWD_REGEX.test(pwd);
    setValidPwd(valid);
    console.log(pwd);
  }, [pwd]);

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(name, email);
  };

  return (
    <div className="md:w-1/3 bg-gray-200 rounded-3xl shadow-2xl">
      <h2 className="py-4 px-8 text-xl text-gray-600 font-semibold capitalize tracking-wide">
        sign up
      </h2>
      <form onSubmit={handleForm} className="bg-white px-8 py-5 rounded-3xl">
        <div className="flex flex-col my-3">
          <label
            htmlFor="name"
            className="capitalize text-lg text-blue-800 text-opacity-60"
          >
            user name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            type="text"
            id="name"
            className="w-full bg-none py-2 border-b-2 border-gray-400 focus:outline-none"
            placeholder="Enter your Username"
          />
          <p
            className={
              name && !validName
                ? "text-red-400 text-[8px] md:text-[13px] my-2 rounded-md"
                : "hidden"
            }
          >
            Must be 4 to 24 characters <br />
            Must start with a letter <br />
            After which numbers, underscores, hyphens are allowed
            <br />
          </p>
        </div>

        <div className="flex flex-col my-3">
          <label
            htmlFor="password"
            className="capitalize text-lg text-blue-800 text-opacity-60"
          >
            email
          </label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-none py-2 border-b-2 border-gray-400 focus:outline-none"
            placeholder="example@gmail.com"
          />
          <p
            className={
              email && !validEmail
                ? "text-red-400 text-[8px] md:text-[13px] my-2 rounded-md"
                : "hidden"
            }
          >
            Must be a valid email <br />
            Must start with a letter <br />
            Must contain an @ symbol
            <br />
          </p>
        </div>

        <div className="flex flex-col my-3">
          <label
            htmlFor="password"
            className="capitalize text-lg text-blue-800 text-opacity-60"
          >
            password
          </label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPwd(e.target.value)}
            className="w-full bg-none py-2 border-b-2 border-gray-400 focus:outline-none"
            placeholder="Enter your Password"
          />
          <p
            className={
              pwd && !validPwd
                ? "text-red-400 text-[8px] md:text-[13px] my-2 rounded-md"
                : "hidden"
            }
          >
            Password can't be less than 8 characters
            <br />
            Must include letters uppercase & lowercase <br />
            Must include at least one number & special character <br />
          </p>
        </div>
        <button
          disabled={!validName || !validEmail || !validPwd ? true : false}
          type="submit"
          className="text-center bg-blue-600 text-white py-2 w-full rounded-md mt-5 capitalize"
        >
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
