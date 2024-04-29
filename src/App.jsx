import { useState } from 'react';
import './App.css';
//Импорт компонента TodoForm
import TodoForm from './components/TodoForm';
// Импорт компонента TodoList
import TodoList from './components/TodoList';
function App() {
  //Создаём состояние массива, хранящего в себе текст из субмита
  const [todos, setTodos] = useState([]);

  //Создаём обработчик для добавления элементов в массив. text - новый элемент
  const addTodoHandler = (text) => {
    // ...todos - перебор уже существующих элементов в массиве
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <h1>Todo application</h1>
      {/* addTodoHAndler - передаём обработчик */}
      <TodoForm addTodo={addTodoHandler} />
      {/* Передаём массив */}
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
