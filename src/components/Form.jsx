import React from 'react'
import "../index.css";

const Form = ({ inputText, setInputText, todos, setTodos }) => {

  // const textInputHandler = (e) => {
  //   console.log(e.target.value);
  //   setInputText(e.target.value);
  // }

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text:{inputText}, completed:false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  }

  return (
    <div className=''>
      <form action="" className='form'>
        <input type="text" className='inp-todo' value={inputText} onChange={(e) => setInputText(e.target.value)} />
        <button className='but-todo' type='submit' onClick={submitTodoHandler}>
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
