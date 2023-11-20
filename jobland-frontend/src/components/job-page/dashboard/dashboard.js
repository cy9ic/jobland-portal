import React from 'react'
import LeftContainer from '../left-container/left-container'
import Middle from '../mid-page/middle'
import RJobCard from '../right-page/rightcard'
export default function Dashboard() {
  return (
    <>
    <div className='flex'>
    <LeftContainer/>
    <Middle/>
    <RJobCard/>
      </div>
      
    </>
  )
}