import React from 'react'
import logo from "../../../assets/logo-black.png"
export default function LeftContainer(props) {
  return (
    <>
    <div className='w-[20%] h-[100vh] border-r-[1.5px] border-gray-200 overflow-hidden '>
    <div className='flex  justify-center mt-28 '>

         <span className='text-7xl font-serif p-2 font-medium  '>J</span>
    </div>

    <hr  className=' mt-20'/>
    <div className='mt-10'>
      <ul className='flex flex-col gap-16 [&>*]:pl-14 [&>*]:font-semibold [&>*]:text-xl   pt-10 [&>*]:p-4 [&>*]:border-b-2 [&>*]:mx-5 [&>*]:pb-10 '>


        <li className='hover:text-green-600 hover:border-l-4 flex gap-3 hover:border-green-700 hover:border-b-0'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
 <button className=''>Home</button></li>

        <li className='hover:text-green-600 hover:border-l-4 flex gap-3 hover:border-green-700 hover:border-b-0'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
<button onClick={()=>{props.func("profile")}} className=''>
Profile Dashboard</button></li>


        <li className='hover:text-green-600 hover:border-l-4 flex gap-3 hover:border-green-700 hover:border-b-0'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>

          <button onClick={()=>{props.func("jobs")}} className=''>Job Postings</button></li>


        <li className='hover:text-green-600 flex gap-3 hover:border-l-4  hover:border-green-700 hover:border-b-0'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
</svg>

          <button className=''>Report a issue</button></li>
      </ul>
      
    </div>
    </div>

    </>
  )
}