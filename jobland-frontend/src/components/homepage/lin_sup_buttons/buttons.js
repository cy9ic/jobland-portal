import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function LSButton(props) {
const history = useNavigate();
  return (
    <>
    <button onClick={()=>{history("/register-signin")}} className={`bg-${props.color}  text-${props.color==="black"?"white":"black"} p-7 rounded-2xl hover:bg-green-600 hover:text-white hover:border-black`}>
    {props.text}
    </button>
    </>
  )
}
