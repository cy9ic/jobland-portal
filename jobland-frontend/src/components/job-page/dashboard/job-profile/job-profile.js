import React from 'react'
import google from "../../../../assets/google-color-icon.svg"
import { FaFacebook ,FaTwitter,FaLinkedin } from "react-icons/fa";
import AppliedCard from './applied_card/applied';
export default function CandidateProfile() {
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
                
            <div className='resume'> 
            
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
            </div>

            <div className='flex flex-col w-[25%] py-10'>

                <span className='text-4xl flex justify-center mx-5 font-semibold '>Resume</span>
                <div className='ml-20 h-[70%] justify-center w-52 rounded-2xl m-5 bg-gray-100'></div>
                <div className='flex place-content-evenly  '>
                    <button className=' w-[100%] font-semibold text-white bg-blue-500 hover:text-black mx-16 ml-24 p-2 rounded-2xl ' >Upload new resume</button>
                     
                </div>
            </div>
        


        </div>

        <div className=' border m-10 mt-10 h-[100%] w-[75%] bg-white  rounded-xl flex flex-col'>

        <div className='py-10 pl-10'>
            <span className='text-3xl font-semibold'>Applications</span>
        </div>
        <div>
            <ul className='flex place-content-evenly text-xl font-bold ml-10 text-gray-400'>
            <li>No.</li>
            <li>Company Name</li>
            <li>Job Role</li>
            <li>Status</li>
            <li className='mr-10'>Applied Date</li>
            </ul>

            
        </div>
        <div className='flex flex-col gap-y-5 mt-10'>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            <AppliedCard/>
            </div>
        </div>
    </div>
    </>
  )
}
