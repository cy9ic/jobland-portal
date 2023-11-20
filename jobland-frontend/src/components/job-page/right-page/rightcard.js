import React from 'react'
import googleicon from "../../../assets/google-color-icon.svg"
export default function () {
  return (
    <>
    <div className='main-div w-[30%] flex flex-col gap-10'>

        <div className="top-div  flex flex-col py-20  justify-center  [&>*]:flex [&>*]:justify-center [&>*]:align-middle">
            <div>
            <img src={googleicon} alt="" className='w-28 h-28 bg-gray-100  rounded-xl p-4' />
            </div>
            <span className='text-2xl mt-4 font-sans font-semibold align-middle'>Google</span>
            <span className='text-gray-500 '> Technology Company</span>
        </div>

        <hr className='mx-16 border-t-gray-300' />
        <div className='flex  '>
            <div className='flex flex-col gap-2 ml-16'>
            <span  className='text-2xl font-semibold  font-sans'>Product Designer</span>
            <span>Chandigarh, India</span>
            </div>
    
            <button className='ml-56'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-9 h-9 mt-3">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg></button>
        </div>

        <hr className='mx-16 border-t-gray-300' />

        <div className='flex flex-col gap-5'>
            <span className='text-2xl font-semibold font-sans pl-16'>Description</span>
            <p className='pl-16 pr-7 leading-7 text-gray-500'>
            A Production Designer is a key creative professional responsible for translating concepts into visually compelling designs within film, television, theater, or other multimedia projects. They collaborate closely with directors, art directors, and other team members to establish the visual identity and aesthetics of a production. Their role involves creating sketches, storyboards, and detailed plans to guide the set design, props, costumes, and overall visual elements. They possess a keen eye for detail, proficiency in design software, and a deep understanding of visual storytelling to bring the artistic vision to life while ensuring it aligns with the project's budget and logistical constraints.
            </p>
        </div>
        <hr className='mx-16 border-t-gray-300' />
        <div className='flex place-content-evenly'>
        <button className='bg-green-400 p-6 text-black hover:text-white hover:bg-black text-2xl rounded-2xl font-sans  font-semibold'>Apply Now</button>

        </div>

        <hr className='mx-16  border-t-gray-300' />

        <div className='flex place-content-evenly'>
            <span>

            Visit the official website for more info:
             <a href='https://www.google.com/about/careers/applications/' className='ml-2 text-blue-600'>Google</a>
            </span>
            </div>
        

    </div>
    </>
  )
}