import React from 'react'
import JobCard from '../job-cards/jcard'
import RecBtn from './button/button'
export default function RecruiterPosting() {
  return (
    <div className=' main w-[50%] pt-20 p-10 h-[100vh]  flex flex-col bg-gray-100  border-r-[1.5px]   overflow-hidden gap-16'>
        <span className='text-5xl'>Let's set up your new job</span>
        <form action=""  className='flex flex-col gap-5'>
            <label className='text-2xl font-semibold' htmlFor="heading">What kind of job is this?</label>
        <input type="text" placeholder='Enter job title' className=' bg-gray-100 outline-none  border-b-2 border-gray-400 text-3xl pb-5' />
        <label htmlFor="jobtype" className='text-2xl font-semibold mt-5'> Choose your job type</label>
        <ul className='flex  gap-5 [&>*]:outline-none'>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='ml-[-2px] border-2 rounded-2xl'>
                <RecBtn text="Internship"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-2xl'>
            <RecBtn text="Full-time"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-2xl'>
            <RecBtn text="Contractor"/>
            </li>
        </ul>
        <label htmlFor="description-heading" className='mt-7 text-2xl font-semibold'> Job description </label>
        <textarea name="description" id="job-description" cols="30" rows="10" className='rounded-2xl p-5 text-xl'></textarea>
        <label htmlFor="category" className='mt-7 text-2xl font-semibold'> Choose a category from this job</label>
        <ul className='flex  gap-5 [&>*]:outline-none'>
        <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='ml-[-2px] border-2 rounded-2xl'>
                <RecBtn text="Engineering"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-2xl'>
            <RecBtn text="Design"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-2xl'>
            <RecBtn text="Product"/>
            </li>
            <li onClick={(e)=>{e.preventDefault();e.currentTarget.classList.toggle("border-red-400");}} className='border-2 rounded-2xl'>
            <RecBtn text="Other"/>
            </li>
        </ul>

        </form>




        <div className='flex flex-col gap-5'>
        
        
        </div>
</div>
  )
}