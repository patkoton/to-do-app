import './index.css';
import Form from './components/Form';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div className="App">
      <header className='app-header'>
        <h1>Pat Todo List</h1>
      </header>
      <Form setInputText={setInputText} />
      <ToDoList />
    </div>
  );
}

export default App;
