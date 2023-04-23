import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { ethers } from "ethers";

import { useStateContext } from "../context";
// import { money } from "../assets";
import { CustomButton, FormField, Loader } from "../components";
// import { checkIfImage } from "../utils";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          User Login
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full mt-[65px] flex flex-col gap-[30px]"
      >
        <div className="flex flex-wrap gap-[40px]">
          <FormField
            labelName="Email*"
            placeholder="example@gmail.com"
            inputType="email"
            value={form.email}
            handleChange={(e) => handleFormFieldChange("email", e)}
          />
        </div>

        <FormField
          labelName="Password *"
          placeholder="your password"
          value={form.password}
          handleChange={(e) => handleFormFieldChange("password", e)}
        />

        <div className="flex justify-center items-center mt-[4px] ">
          <CustomButton
            className=""
            btnType="submit"
            title="login"
            styles="bg-[#1dc071]"
          />
          {/* <link  href="./">
          register
        </link> */}
        </div>
      </form>
    </div>
  );
};

export default Login;
