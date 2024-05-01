import { useState } from 'react';
// Уникальный id
import { v4 as uuidv4 } from 'uuid';
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
    //Объект, который предсставляет из себя элементы массива
    const newTodo = {
      //Текст
      text: text,
      //Завершенно или нет
      isCompleted: false,
      //Айдишник
      id: uuidv4(),
    };
    // ...todos - перебор уже существующих элементов в массиве
    setTodos([...todos, newTodo]);
  };

  // Создаём обработчик удаления
  const deleteTodoHandler = (id) => {
    //Мы делаем итерацию по todo.id в объектах массива и сравниваем с тем id, который передаётся в качетсве параметра функции
    setTodos(todos.filter((todo) => todo.id !== id));
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
