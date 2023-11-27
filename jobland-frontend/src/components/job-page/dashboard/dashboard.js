import React, { useState , useCallback, useEffect } from 'react'
import LeftContainer from '../left-container/left-container'
import Middle from '../mid-page/middle'
import RJobCard from '../right-page/rightcard'
import CandidateProfile from './job-profile/job-profile'
import RecruiterDashboard from './job-profile/recruiter-profile-dashboard/recruiter_dashboard'
import RecruiterPosting from '../mid-page/recruiter-job-creation/recruiter-post'
import UserProfileOverlay from '../mid-page/recruiter-job-creation/profile_complete'
import CandidateProfileOverlay from '../mid-page/candidate/candidate_profile'
export default function Dashboard(props) {
  const [clicked, setClicked] = useState("jobs");

const handleclick = (val)=>{
  setClicked(val.toString());
}

useEffect(()=>{console.log(props.data);console.log(props.data.role)},[]);
  return (
    <>
    <div className='flex'>
      {clicked === 'jobs' ? (
        <>
          {props.data.role==='candidate'?(<>
          <div className={`${props.data.verified===false?"blur-md":""} flex w-[100%]`}>

          <LeftContainer func={handleclick}/>
          <Middle />
          <RJobCard />
          </div>

          {props.data.verified===false && <CandidateProfileOverlay email={props.data.email} change={props.change} data={props.data}/>}
          
          </>):<>
          <div className={`${props.data.verified===false?"blur-md":""} flex w-[100%]`}>
          <LeftContainer func={handleclick}/>
          <RecruiterPosting/>
          
          </div>
          
          {props.data.verified===false && <UserProfileOverlay email={props.data.userEmail} change={props.change} data={props.data}/>}
          
          </>}
        
          </>
      ) : clicked === "profile" ? (
        <>


          <LeftContainer func={() => handleclick("jobs")} />

          {props.data.role==='candidate'?<>
          
          <CandidateProfile/>
          
          </>:<>
          
          <RecruiterDashboard/>
          </>}
        </>
      ) : (
        "dasdsd"
      )}
    </div>
    </>
  );
}