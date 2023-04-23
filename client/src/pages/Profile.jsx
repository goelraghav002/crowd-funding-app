import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context'
import { Navigate } from 'react-router-dom';
import { userInfo } from '../helpers/apiRequest';

const Profile = () => {
  
  const token = window.localStorage.getItem('token');
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getUserCampaigns } = useStateContext();

  const [user, setUser] = useState(null);

	useEffect(() => {
		if (token) {
			userInfo().then((data) => setUser(data.user));
		}
  }, []);
  
  console.log(user);

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getUserCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  }

  if (!token){
    return <Navigate to="/login" replace />
  }

  useEffect(() => {
    if(contract) fetchCampaigns();
  }, [address, contract]);

  return (
    <>
      <div className='text-white mb-10'>
        <h4 className='font-bold text-[30px] my-2'>User Details</h4>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Name: </span>{user?.name}</p>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Description: </span>{user?.description}</p>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Gov Id Type: </span>{user?.govIdType}</p>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Gov Id Number: </span>{user?.govIdNumber}</p>
        <h4 className='font-bold text-[20px] my-4'>Contact Details</h4>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Contact Number: </span>{user?.contact1}</p>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Altername Number: </span>{user?.contact2}</p>
        <p className='mt-3 text-white'>&nbsp;&nbsp;<span className='font-bold text-gray-400'>Email: </span>{user?.email}</p>

      </div>
      <DisplayCampaigns 
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  )
}

export default Profile