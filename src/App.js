import './index.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useEffect, useState } from 'react';

function App() {
  //useState
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);

  //Function & Events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  //Run once when the App starts
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  useEffect(() => {
    getLocalTodos();
  }, [])

  //Save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  //A function to run the update state
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status])


  return (
    <div className="App">
      <header className='app-header'>
        <h1>Pat To-do List</h1>
      </header>
      <Form inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos}
            setStatus={setStatus}
      />
      <ToDoList todos={todos} 
                setTodos={setTodos} 
                filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
