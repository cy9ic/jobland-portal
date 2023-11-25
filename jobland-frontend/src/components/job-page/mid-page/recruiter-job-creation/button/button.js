import React from 'react'

export default function RecBtn(props) {
  return (
    <button className=' hover:bg-green-200 bg-white  px-12 py-10 rounded-xl text-2xl font-semibold '>
        {props.text}
    </button>
  )
}
