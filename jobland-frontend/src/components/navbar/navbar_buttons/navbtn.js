import React from 'react'

export default function NavBtn(props) {
  return (
    <>
    <button className='text-3xl text-gray-200 p-5 hover:border-b-4 hover:border-green-800  '>{props.title}</button>
    </>
  )
}
