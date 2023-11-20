import React from 'react'
import NavBtn from './navbar_buttons/navbtn'
import img from "../../assets/logo-black.png";
export default function Navbar() {
  return (
    <div className='w-[100%] absolute z-[999]'>
        <ul className='flex border-b-[1.5px] border-gray-400'>
      <li className="ml-10  rounded-xl p-2">
        <button>
          
      <img src={img} alt="" className="ml-5 h-20 w-20 object-contain border-black border-2 rounded-full " />
      <span className="text-white w-max flex">The Land of Jobs</span>
        </button>
      </li>
    
      <ul className="p-4 w-full flex gap-10 overflow-hidden justify-end ">
        <NavBtn title="Home"/>
        <NavBtn title="About"/>
        <NavBtn title="Contact"/>
        </ul>
        </ul>

    </div>
  )
}
