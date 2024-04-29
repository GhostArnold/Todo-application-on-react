import { useState } from 'react';
import './App.css';
//Импорт модуля css для App
import styles from './App.module.css';
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

  // Создаём обработчик удаления
  // index - параметр в который мы в дальнейшем засунем индекса элементов массивов
  const deleteTodoHandler = (index) => {
    // idx представляет индекс текущего элемента в массиве todos. _ - затычка, вместо массива todos, т.к мы его не используем
    //Это всё шаблонные параметры
    // idx - текущий элемент, который мы получаем при клике
    setTodos(todos.filter((_, idx) => index !== idx));
  };

  return (
    <div className="App">
      <div className={styles.mainBlock}>
        <h1>Todo application</h1>
        {/* addTodoHAndler - передаём обработчик */}
        <TodoForm addTodo={addTodoHandler} />
        {/* Передаём массив */}
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
    </div>
  );
}

export default App;
