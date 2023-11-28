import React, { useEffect,useState } from 'react'
import google from "../../../../assets/google-color-icon.svg"
import facebook from "../../../../assets/facebook-round-color-icon.svg"

import macdonald from "../../../../assets/mcdonald-s-15-logo-svgrepo-com.svg";
import snapchat from "../../../../assets/snapchat-logo-svgrepo-com.svg";
import twitter from "../../../../assets/twitter-3-logo-svgrepo-com.svg";
import apple from "../../../../assets/apple-black-logo-svgrepo-com.svg";
import { FaFacebook ,FaTwitter,FaLinkedin } from "react-icons/fa";
import AppliedCard from './applied_card/applied';
import axios from "axios";


export default function CandidateProfile(props) {
    const [userdata , change] = useState([]);
    const getData = async ()=>{
        const email = props.email;
        console.log(email);
        try {
            const data = await axios.get('http://localhost:3001/candidate/getProfile',{ params: { email: email } });
            change(data.data.token);
            console.log(data.data.token);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getData();
    },[])
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
                <span className='text-4xl font-semibold'>{userdata.name}</span>
                <span className='text-xl text-gray-400'>Web developer</span>
                </div>
                <hr className='mx-[-50px]' />
                <span className='text-gray-400'>Email: <span className='text-cyan-700'>{userdata.email}</span></span>
                <span className='text-gray-400'>Contact: <span className='text-cyan-700'>{userdata.phoneNumber}</span></span>
                <span className='text-gray-400'>Location: <span className='text-cyan-700'>{userdata.country}</span></span>
                <span className='text-gray-400'>College: <span className='text-cyan-700'>dasdasd</span></span>
                <span className='text-gray-400'>LinkedIn Profile: <span className='text-cyan-700'>{userdata.linkedinProfile}</span></span>
                <span className='text-gray-400'>Personal Website: <span className='text-cyan-700'>{userdata.personalWebsite}</span></span>
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
            <AppliedCard img={google}/>
            <AppliedCard img={facebook}/>
            <AppliedCard img={snapchat}/>
            <AppliedCard img={apple}/>
            <AppliedCard img={twitter}/>
            <AppliedCard img={macdonald}/>
        
            </div>
        </div>
    </div>
    </>
  )
}
