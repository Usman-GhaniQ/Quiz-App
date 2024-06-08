import React, { useRef } from 'react'
const Input = ({title , placeholder , func}) => {

const name = useRef()
const showValue = ()=>{
    console.log(name.current.value)
    func(name.current.value)
  }
 return (
  <>
  <label htmlFor="input">{title}</label>
   <input type="text" id='input' placeholder={placeholder} ref={name} /> <br /><br />
   <button onClick={showValue}>Login</button>
   </>
 )
 }

export default Input