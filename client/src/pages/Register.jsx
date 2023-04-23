import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { useStateContext } from '../context';
import { money } from '../assets';
import { CustomButton, FormField, Loader } from '../components';
import { checkIfImage } from '../utils';

const Register = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const { createCampaign } = useStateContext();
  const [form, setForm] = useState({
    name: '',
    email: '',
    description: '',
    govIdType: '', 
    govIdNumber: '',
    contact1: '',
    contact2: '',
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert('submitted');
    // alert(form)
    console.log(form);
  
  }

  return (
    <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
      {isLoading && <Loader />}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">New User Registration</h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[65px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Name (Individual or Organization) *"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
          <FormField 
            labelName="Email Id *"
            placeholder="example@example.com"
            inputType="Email"
            value={form.email}
            handleChange={(e) => handleFormFieldChange('email', e)}
          />
        </div>

        <FormField 
            labelName="About *"
            placeholder="Explain about your motive,why you need it,what are you planning to do with it. (Max 300 words). "
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />

        {/* <div className="w-full flex justify-start items-center p-4 bg-[#8c6dfd] h-[120px] rounded-[10px]">
          <img src={money} alt="money" className="w-[40px] h-[40px] object-contain"/>
          <h4 className="font-epilogue font-bold text-[25px] text-white ml-[20px]">You will get 100% of the raised amount</h4>
        </div> */}

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Government Issued Indentification Type *"
            placeholder="Example - PAN Card"
            inputType="text"
            value={form.govIdType}
            handleChange={(e) => handleFormFieldChange('govIdType', e)}
          />
          <FormField 
            labelName="Government Issued Unique Indentification Number *"
            placeholder="ABCDE0123F"
            inputType="text"
            value={form.govIdNumber}
            handleChange={(e) => handleFormFieldChange('govIdNumber', e)}
          />
        </div>

        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName="Contact Number (10 digits) *"
            placeholder="9876543210"
            inputType="number"
            value={form.contact1}
            handleChange={(e) => handleFormFieldChange('contact1', e)}
          />
          <FormField 
            labelName="Alternate Contact Number (10 digits) *"
            placeholder="9876543210"
            inputType="number"
            value={form.contact2}
            handleChange={(e) => handleFormFieldChange('contact2', e)}
          />
        </div>

          <div className="flex justify-center items-center mt-[40px]">
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
            />
          </div>
      </form>
    </div>
  )
}

export default Register