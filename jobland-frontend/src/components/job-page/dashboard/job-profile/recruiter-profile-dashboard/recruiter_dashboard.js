import React from 'react'
import { FaLinkedin ,FaTwitter,FaFacebook } from 'react-icons/fa'
import google from "../../../../../assets/google-color-icon.svg";
import RecruiterCard from './recruiter-card/rcard';
export default function RecruiterDashboard() {
  return (
    <>
    <div className='w-[80%] bg-gray-100 overflow-auto '>
        <div className='w-[75%] m-10 bg-white flex place-content-evenly border-2  h-[30%] rounded-xl '>

            
            <div className='profile-details flex'>
                <div className='[&>*]:m-2 flex flex-col justify-center align-middle border-r-2 pr-20'>
                <img src={google} className='w-48 h-64 border-2 p-2  border-gray-200 rounded-xl' alt="" />
                <div className='flex place-content-evenly'>

                <FaFacebook size={30} color='gray'/>
                <FaTwitter size={30} color='gray'/>
                <FaLinkedin size={30} color='gray'/>
                </div>
                </div>
         
            </div>

            <div className='flex flex-col place-content-evenly '>
                <div className='flex flex-col'>
                <span className='text-4xl font-semibold'>Harkaran Singh</span>
                <span className='text-xl text-gray-400'>Web developer</span>
                </div>
                <hr className='mx-[-50px]' />
                <span className='text-gray-400'>Email: <span className='text-cyan-700'>harkaran0010@gmail.com</span></span>
                <span className='text-gray-400'>Contact: <span className='text-cyan-700'>+919988944141</span></span>
                <span className='text-gray-400'>Location: <span className='text-cyan-700'>Chandigarh, India</span></span>
                <span className='text-gray-400'>Company <span className='text-cyan-700'>Google Inc.</span></span>
            </div>

           
        


        </div>

        <div className=' border m-10 mt-10  h-[100%] w-[75%] bg-white  rounded-xl flex flex-col'>

        <div className='py-10 pl-32 p-20'>
            <span className='text-3xl font-semibold'>Applications</span>
        </div>
        <div>
            <ul className='flex mx-16 place-content-evenly text-xl font-bold [&>*]:ml-5 text-gray-400'>
            <li>No.</li>
            <li>Candidate Name</li>
            <li>Job Applied for</li>
            <li className=''>Applied Date</li>
            <li className='pr-16'> Approval</li>
            </ul>

            
        </div>

        <div className='flex flex-col rounded-xl bg-gray-100 mx-16 mt-10'>
            <RecruiterCard/>
            <RecruiterCard/>
            <RecruiterCard/>
            <RecruiterCard/>
            </div>
        </div>
    </div>
    </>
  )
}
