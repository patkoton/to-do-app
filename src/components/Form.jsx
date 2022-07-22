import React from 'react'
import "../index.css";

const Form = ({setInputText}) => {

  const textInputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
  return (
    <div className=''>
      <form action="" className='form'>
        <input type="text" onChange={textInputHandler} className='inp-todo' />
        <button className='but-todo' type='submit'>
        <i class="fas fa-plus-square"></i>
        </button>
        
        <div className='select'>
            <select name="todo" id="" className='sel-todo'>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>
      </form>
    </div>
  )
}

export default Form
