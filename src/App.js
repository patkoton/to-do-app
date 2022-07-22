import './index.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className='app-header'>
        <h1>Pat Todo List</h1>
      </header>
      <Form inputText={inputText} 
            setInputText={setInputText} 
            todos={todos} 
            setTodos={setTodos}
      />
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
