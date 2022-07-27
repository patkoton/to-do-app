import React from 'react'
import '../index.css';

const Todo = ({ text, todo, todos, setTodos }) => {
  //Events
  //filtering this state out and trying to find an element that matches what is being clicked.
  //If it matches, it get rids of it
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      };
      return item;
    })); 
  }

  return (
    <div className='todo-style'>
      {/* Using CSS to dynamically update our styling... */}
      <li className={`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
      <button className='complete-btn' onClick={completeHandler}><i className='fas fa-check'></i></button>
      <button className='trash-btn' onClick={deleteHandler}><i className='fas fa-trash'></i></button>
    </div>
  )
}

export default Todo
