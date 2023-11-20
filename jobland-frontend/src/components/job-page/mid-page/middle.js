import React from 'react'
import JobCard from './job-cards/jcard'
export default function Middle() {
  return (
    <div className=' main w-[50%] h-[100vh]  flex flex-col bg-gray-100  border-r-[1.5px] overflow-scroll  overflow-x-hidden'>
        
        <div className='title-box flex flex-col mt-16 w-[100%]   '>
            <span className=" flex text-4xl font-bold font-sans align-middle justify-center">JOBLAND</span>
            <span className='flex   font-medium text-gray-500 font-sans align-middle justify-center'>923 Jobs posted in 2023</span>
            
            <div className='bg-white input-box flex border-2 rounded-lg gap-x-10 m-10'>
                    <button>
                <div className='bg-green-300 h-[100%] p-5'>
                    
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6  mt-1 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>
                </div>
</button>
<input type="text"  placeholder='Enter Job title' className='outline-none w-[100%] p-5 text-xl'/>

            </div>
            
        </div>

        <div className='card-div flex flex-col gap-16 mt-10  '> 
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        </div>
    </div>
  )
}