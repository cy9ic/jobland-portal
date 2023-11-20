import React, { useState } from 'react'
import img from "../../assets/google-color-icon.svg"
import img2 from "../../assets/facebook-round-color-icon.svg"
import img3 from "../../assets/recruiter.jpg";
import mang from "../../assets/mang.png"
import "./login_signup.css"
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
    const [signin , change] = useState(false);
const history = useNavigate();
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }
      
const toggle = async ()=>{
    let element = document.getElementById('parent-container');
    element.classList.toggle('moved');
    signin===true?change(false):change(true);
    let start = document.getElementById("started");
    let have_acc = document.getElementById("have_acc");
    let signinbtn = document.getElementById("signinbtn");
    let regbtn = document.getElementById("registerbtn");
    let confirmplabel = document.getElementById("confirmp");
    let confirmpinput = document.getElementById("confirmp2");
    delay(250).then(()=>{
        if(signin===false){
            confirmpinput.classList.toggle("hidden");
            confirmplabel.classList.toggle("hidden");
            start.innerHTML="";
            have_acc.innerHTML="";
            signinbtn.innerHTML="";
            start.innerHTML+="Don't have an account?";
            have_acc.innerHTML+="Click here to register youself!"
            signinbtn.innerHTML+="Sign up";
            regbtn.innerHTML="";
            regbtn.innerHTML+="Sign In";
        }else{
            confirmpinput.classList.toggle("hidden");
            confirmplabel.classList.toggle("hidden");
            start.innerHTML="";
            have_acc.innerHTML="";
            signinbtn.innerHTML="";
            regbtn.innerHTML="";
            start.innerHTML+="Get Started!";
            have_acc.innerHTML+="Already Have an account?!"
            signinbtn.innerHTML+="Sign in";
            regbtn.innerHTML+="Register Now";
    
        }
    })

    
    
}
  return (
    <>
    <div id='parent-container' className='wrapper h-[100vh] overflow-hidden '>

        <div className='nav w-[100%] bg-white  p-5 flex'>

            <span className=' text-black font-semibold text-3xl'><button className='mr-2 p-2 rounded-2xl text-white bg-green-800'>Jobland:</button> The place where destinies change.</span>
            <ul className='text-white flex [&>*]:bg-green-800 [&>*]:px-10 ml-auto mr-10 justify-end [&>*]:rounded-2xl [&>*]:font-semibold text-2xl  gap-10'>
                <button onClick={()=>{history("/")}} className='hover:bg-black hover:text-white'>Home</button>
                <button className='hover:bg-black hover:text-white'>About</button>
                <button className='hover:bg-black hover:text-white'> Contact</button>
            </ul>

        </div>
     
<div className='body flex bg-gray-200  rounded-3xl rounded-t-none'>

    <div className='left-container w-[50%] bg-gray-200 h-[100vh]  flex flex-col justify-center items-center gap-2 rounded-l-3xl'>
    <span id='started' className='text-7xl mt-10 font-extrabold   '> Get Started!</span>
    <span className='flex'>

    <span id='have_acc' className='font-medium text-2xl'>Already Have an account?
    </span>
    <button onClick={toggle} id='signinbtn' className='text-green-600 text-2xl font-bold tracking-wide ml-2'>Sign In</button>

    </span>

    <ul className='flex gap-10 mt-24'>
     <li>

        <button className='flex text-xl font-semibold border-2 border-black rounded-3xl p-2 gap-2 hover:bg-black hover:text-white'>
        <img src={img} className='h-8 w-8' alt="" />
        {signin===true?"Sign in":"Sign up"} with google
        </button>

     </li>

     <button className='flex text-xl font-semibold border-2 border-black rounded-3xl p-2 gap-2 hover:bg-black hover:text-white'>
        <img src={img2} className='h-8 w-8' alt="" />
        {signin===true?"Sign in":"Sign up"} with Facebook
        </button>
        <li>

        </li>
    </ul>
    
    <span className='font-semibold text-gray-700 text-2xl justify-center flex mt-6 items-center gap-3  w-[100%]'> 
    <hr className='w-[100%] h-[1.5px] ml-14  bg-black ' />
    <span className='text-gray-600'>Or</span>
    <hr className='w-[100%] mr-14 h-[1.5px] bg-black  ' />
    </span>
    

    <form action="post" className='flex flex-col [&>*]:p-5 [&>*]:rounded-xl [&>*]:text-2xl [&>*]:font-semibold [&>label]:mt-6 [&>input]:w-[600px] [&>button]:p-9 [&>button]:rounded-3xl'>

        <label htmlFor="email">Email <span className='text-red-600'>*</span></label>
        <input type="text" placeholder='email@gmail.com' />

        <label htmlFor="password">Password <span className='text-red-600'>*</span> </label>
        <input type="password" placeholder='Enter Password' />
        
        <label htmlFor="confirmpass" id='confirmp'>Confirm password <span className='text-red-600'>*</span></label>
        <input type="password" id='confirmp2'  placeholder='confirm your password' />

        <button id='registerbtn' type='submit' className={` bg-green-500 mt-10 hover:bg-black hover:text-white`} >
            Register Now
        </button>
    </form>
    
    <p className={`pb-20 w-[100%] flex  justify-center align-middle `}>
        By signing up, you are agreeing to our <span className='text-green-600 font-bold ml-2'>Terms & Conditions</span>
        <br />
        <span className='ml-2'>and </span>
         <span className='ml-2 text-green-600 font-bold'>Privacy policy.</span>
    </p>
    
    </div>
    <div className='h-[100%] w-[50%] bg-white rounded-r-3xl  p-4 right-container '>

        <h1 className='text-7xl font-bold font-sans gap-5 text-black flex '>Welcome to <span className='text-green-600'>Jobland !
</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-20 h-20 text-green-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
</svg>
</h1>
<div className='flex gap-5 pr-2 pt-20 ' >

<img src={img3} alt=""  className='w-[50%] h-96 border-2 rounded-3xl border-black object-contain '/>
<img src={mang} alt=""  className='w-[50%] h-96 border-2 rounded-3xl border-black object-contain'/>
</div>

<p className='p-4 leading-10 m-3 mt-10 text-xl border-2 bg-gray-200 text-black rounded-3xl mb-96' >
We extend a warm welcome to ambitious individuals eager to embark on their professional journey or seasoned talents seeking new opportunities. As you step into our vibrant community, you unlock a gateway to a myriad of career prospects. Our platform is designed with a mission to bridge the gap between talent and opportunity, offering a seamless interface where job seekers can explore diverse roles across industries while employers discover exceptional candidates to fuel their enterprises. With intuitive tools and comprehensive resources, we aim to empower every user, facilitating connections that foster growth, innovation, and mutual success. Join us in shaping the future of work, where aspirations converge with possibilities, and every interaction is a step towards fulfilling career aspirations.
</p>

    </div>
    
    </div>

    </div>
    </>
  )
}
