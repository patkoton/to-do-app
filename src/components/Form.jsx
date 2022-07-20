import React from 'react'
import "../index.css";

const Form = () => {
  return (
    <div className='form'>
      <form action="">
        <input type="text" className='inp-todo' />
        <button className='but-todo' type='submit'></button>
        
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
