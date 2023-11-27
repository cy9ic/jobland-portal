import React from 'react'
import JobCard from '../job-cards/jcard'
import RecBtn from './button/button'
// import UserProfileOverlay from './profile_complete'
import { useState } from 'react'
import UserProfileOverlay from '../candidate/candidate_profile'

export default function RecruiterPosting(props) {



const handleSubmit = (e)=>{
    e.preventDefault();
    const jobtype = "Internship"
const category = "Engineering";
    const formData = new FormData(e.target);
    console.log(formData);
    const formObject = {};
    formData.forEach((val , index)=>{
        formObject[index] = val;
    })
    formObject.email = props.email;
    formObject.category = category;
    formObject.jobtype = jobtype;
    console.log(formObject);
}
  return (

    <>
    {/* <UserProfileOverlay/> */}
    <div className=' main w-[50%] pt-10 p-10 h-[100vh]  flex flex-col bg-gray-100  border-r-[1.5px]   overflow-hidden gap-16'>
        <span className='text-5xl'>Let's set up your new job</span>
        <form onSubmit={handleSubmit}  className='flex flex-col gap-3'>
            <label className='text-xl font-semibold' htmlFor="heading">What kind of job is this?</label>
        <input type="text" placeholder='Enter job title' name='jobTitle' className=' bg-gray-100 outline-none  border-b-2 border-gray-400 text-3xl pb-5' />
        <label htmlFor="jobtype" className='text-xl font-semibold mt-5'> Choose your job type</label>
        <ul className='flex  gap-5 [&>*]:outline-none'>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='ml-[-2px] border-2 rounded-xl'>
                <RecBtn text="Internship"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-xl'>
            <RecBtn text="Full-time"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-xl'>
            <RecBtn text="Contractor"/>
            </li>
        </ul>
        <label htmlFor="CTC" className='text-xl font-semibold mt-2 '>Cost to company [CTC]</label>
        <div className='flex gap-5 text-2xl [&>*]:rounded-xl [&>*]:p-2 [&>*]:outline-none'>

        <input type="text"  name='lowerEndCost' placeholder='10LPA'/>
        <p>To</p>
        <input type="text" name='higherEndCost' placeholder='20LPA'/>
        </div>
        <label htmlFor="description-heading" className='mt-7 text-xl font-semibold'> Job description </label>
        <textarea name="JobDescription" id="job-description" cols="30" rows="5" className='rounded-xl p-5 text-xl'></textarea>
        <label htmlFor="category" className='mt-7 text-xl font-semibold'> Choose a category from this job</label>
        <ul  className='flex  gap-5 [&>*]:outline-none'>
        <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='ml-[-2px] border-2 rounded-xl'>
                <RecBtn  text="Engineering"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-xl'>
            <RecBtn   text="Design"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}}  className='border-2 rounded-xl'>
            <RecBtn   text="Product"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-xl'>
            <RecBtn   text="Other"/>
            </li>
        </ul>
        <button className='mx-36 bg-green-400 text-4xl p-5 rounded-2xl mt-5 hover:bg-black hover:text-white font-semibold'> Submit </button>

        </form>




        <div className='flex flex-col gap-5'>
        
        
        </div>
</div>
</>
  )
}
