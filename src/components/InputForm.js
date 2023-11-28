import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../context/TodoSlice';
import { nanoid } from '@reduxjs/toolkit'

const InputForm = () => {
const [input,setInput]=useState('');

const dispatch=useDispatch();

function handleSubmit(e){
    e.preventDefault();
    const todoObj={
        id:nanoid(),
        text:input,
    }
   dispatch(addTodo(todoObj))
   setInput('')
 
}
  return (
    <div>
    <input type='text' placeholder='Enter your text ' value={input} onChange={(e)=>setInput(e.target.value)} />
    <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default InputForm