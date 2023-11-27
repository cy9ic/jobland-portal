import { useState } from 'react';
import axios from "axios";
const UserProfileOverlay = (props) => {
  const [showOverlay, setShowOverlay] = useState(true);


  const handleFormSubmit = async (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {};
    const email = props.email;
    formData.append("email",email);
    
    
    formData.forEach((val , index)=>{formObject[index] = val})
 

    const data = props.data;
    const updateData = {...data,verified:true};
    props.change(updateData);
    formObject.email = updateData.userEmail;
    
    // console.log("props data is ",updateData);
    // console.log("form data is ",formObject);
console.log(formObject);
    try {
      const response = await axios.post('http://localhost:3001/recruiter/createProfile',formObject,{
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
        <div className="fixed  inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50   flex-col align-middle ">
            <h1 className='text-5xl p-5 bg-green-500 rounded-3xl rounded-b-none'>Complete your profile to continue!</h1>
            <div className='bg-white h-[750px] rounded-3xl p-3 w-[800px] '>
            <h2 className="text-4xl font-semibold pt-5 flex justify-center   rounded-2xl pb-3  align-middle mb-6">User Profile</h2>

                <form onSubmit={handleFormSubmit} encType='multipart/form-data' className='[&>input]:border-gray-300 [&>input]:border-[1px]  [&>input]:rounded-lg  [&>input]:p-2 flex flex-col [&>label]:text-2xl [&>label]:font-semibold [&>*]:mx-2 [&>*]:my-2 [&>input]:outline-none '>

                <label htmlFor="name">Full Name:</label>
                <input type="text" id='name' name='name' className='border-gray-300 border-[1px] rounded-lg'/>

                <label htmlFor="company">What company you work for?</label>
                <select name="company" className='p-2 border-gray-300 border-[1px] rounded-lg text-xl outline-none' id="company">
                    <option value="Google">Google</option>
                    <option value="Meta">Meta</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Adobe">Adobe</option>
                </select>

                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="text" name='phoneNumber' id='phoneNumber' />
                <label htmlFor="position">What is your current position at the company?</label>
                <input type="text" id='position' name='position' />
                <label htmlFor="companyLogo">Upload your company Logo</label>
                <input type="file" id='companyLogo' name='companyLogo' />
                
                <button type='submit' className=' bg-black  hover:bg-black rounded-xl p-5 text-white'>Submit</button>
                </form> 

            </div>
            
        </div>
        </>
      )}
    </div>
  );
};

export default UserProfileOverlay;