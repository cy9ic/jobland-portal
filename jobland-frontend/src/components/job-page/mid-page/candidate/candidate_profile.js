import { useState } from 'react';
import axios from "axios";
const CandidateProfileOverlay = (props) => {
  const [showOverlay, setShowOverlay] = useState(true);


  
  const handleFormSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    const email = props.data.userEmail;

    formData.append("email",email);
    console.log(props);
    
    
    formData.forEach((val , index)=>{formObject[index] = val})
 

    const data = props.data;
    const updateData = {...data,verified:true};
    props.change(updateData);
    formObject.email = updateData.userEmail;
    
    console.log("props data is ",updateData);
    console.log("form data is ",formObject);
    try {
      console.log("Inside try block",formObject);
      const response = await axios.post('http://localhost:3001/candidate/createProfile',formObject,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      
    } catch (error) {
     console.log(error) ;
    }

    
  }

  return (
    <div className="relative  ">

      {showOverlay && (
<>    
        <div className="fixed  inset-0 z-10 mt-[-200px] flex items-center justify-center bg-black bg-opacity-50   flex-col align-middle ">
            <h1 className='text-5xl p-5 pt-0 bg-green-500 rounded-3xl rounded-b-none'>Complete your profile to continue further !</h1>
            <div className='bg-white h-[750px] rounded-3xl p-3 w-[1000px] '>
            <h2 className="text-4xl font-semibold pt-5 flex justify-center   rounded-2xl pb-3  align-middle mb-6">User Profile</h2>

                <form onSubmit={handleFormSubmit} encType='multipart/form-data' className='[&>input]:border-gray-300  [&>input]:border-[1px]  [&>input]:rounded-lg  [&>input]:p-2 flex  [&>label]:text-2xl [&>label]:font-semibold [&>*]:mx-2 [&>*]:my-2 [&>input]:outline-none '>
                <div className='[&>input]:border-gray-300 [&>input]:border-[1px]  [&>input]:rounded-lg  [&>input]:p-2 flex flex-col [&>label]:text-2xl [&>label]:font-semibold [&>*]:mx-2 [&>*]:my-2 [&>input]:outline-none'>
                <label htmlFor="name">Full Name:</label>
                <input type="text" id='djhabsd' name='name' className='border-gray-300 border-[1px] rounded-lg'/>

                <label htmlFor="company">Country of origin</label>
                <select name="country" className='p-2 border-gray-300 border-[1px] rounded-lg text-xl outline-none' id="">
                    <option value="1">India</option>
                    <option value="2">USA</option>
                    <option value="3">China</option>
                    <option value="4">Canada</option>
                </select>
                <label htmlFor="dateOfBirth" >Date of Birth</label>
                <input type="date" name='dateOfBirth'  />
                <label htmlFor="Gender">Gender</label>
                <select name="gender" className='border-2 p-1 rounded-xl outline-none' id="">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>

                </select>
                
                <label htmlFor="LinkedInProfile">LinkedIn Profiler</label>
                <input type="text" name='linkedinProfile' />
                <label htmlFor="education">Education</label>
                <div className='flex [&>*]:p-2 [&>*]:border-2 [&>*]:rounded-xl [&>*]:outline-none ' >
                    <select name="fieldOfStudy" id="" >
                        <option value="Engineering">Engineering</option>
                        <option value="GraphicsDesigner">Graphic Designer</option>
                        <option value="Businner">Managent</option>
                    </select>
                    <select name="institution" id="">
                        <option value="Chitkara University">Chitkara University</option>
                        <option value="Chandigarh University">Chandigarh University</option>
                        <option value="Delhi University">Delhi University</option>
                        
                    </select>
                    
                    <select name="graduationYear" id="">
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>
                        <option value="2005">2005</option>
                        <option value="2006">2006</option>
                        <option value="2007">2007</option>
                        <option value="2008">2008</option>
                        <option value="2009">2009</option>
                        <option value="2010">2010</option>
                        <option value="2011">2011</option>
                        <option value="2012">2012</option>
                        <option value="2013">2013</option>
                        <option value="2014">2014</option>
                        <option value="2015">2015</option>
                        <option value="2016">2016</option>
                        <option value="2017">2017</option>
                        <option value="2018">2018</option>
                        <option value="2019">2019</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select>
                </div>

                </div>

                <div className='w-[100%] [&>input]:border-gray-300 [&>input]:border-[1px]  [&>input]:rounded-lg  [&>input]:p-2 flex flex-col [&>label]:text-2xl [&>label]:font-semibold [&>*]:mx-2 [&>*]:my-2 [&>input]:outline-none'>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name='phoneNumber' />
                <label htmlFor="position">What is your current role? </label>
                <input type="position" />
                <label htmlFor="resume">Upload your Resume :</label>
                <input type="file"  name='resume' accept='.pdf' id='resume'/>
                <label htmlFor="companyLogo">Personal Website:</label>
                <input type="text" name='personalWebsite' />
                
                <button type='submit' className=' bg-black  hover:bg-black rounded-xl p-5 text-white'>Submit</button>
                </div>
                </form> 

            </div>
            
        </div>
        </>
      )}
    </div>
  );
};

export default CandidateProfileOverlay;