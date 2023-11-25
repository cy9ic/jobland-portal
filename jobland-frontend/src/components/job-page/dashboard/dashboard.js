import React, { useState , useCallback } from 'react'
import LeftContainer from '../left-container/left-container'
import Middle from '../mid-page/middle'
import RJobCard from '../right-page/rightcard'
import CandidateProfile from './job-profile/job-profile'
import RecruiterDashboard from './job-profile/recruiter-profile-dashboard/recruiter_dashboard'
import RecruiterPosting from '../mid-page/recruiter-job-creation/recruiter-post'
export default function Dashboard() {
  const [clicked, setClicked] = useState("jobs");

const handleclick = (val)=>{
  setClicked(val.toString());
}
  return (
    <>
    <div className='flex'>
      {clicked === 'jobs' ? (
        <>
          <LeftContainer func={handleclick}/>
          {/* <Middle /> */}
          <RecruiterPosting/>
          {/* <RJobCard /> */}
          </>
      ) : clicked === "profile" ? (
        <>
          <LeftContainer func={() => handleclick("jobs")} />
          {/* <CandidateProfile/> */}
          <RecruiterDashboard/>
        </>
      ) : (
        "dasdsd"
      )}
    </div>
    </>
  );
}