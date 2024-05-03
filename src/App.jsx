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
//Импорт компонента для удаления всего и удаления всех отмеченных задач
import TodosActions from './components/TodosActions';
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

  // Обработчик для завешённых задач
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        // Если мы нашли todo.id который совпадает с id при вызове функции то..
        // Подход с созданием нового объекта называется иммутабельностью данных и он часто используется в React и других JavaScript-проектах для предотвращения нежелательных изменений состояния
        return todo.id === id
          ? // Если условие из пункта 1 истинно, то создается новый объект задачи, копируя все свойства текущей задачи (...todo), а затем обновляя свойство isCompleted на противоположное значение с помощью !todo.isCompleted. Например, если isCompleted было false, теперь оно станет true, и наоборот.
            { ...todo, isCompleted: !todo.isCompleted }
          : // Иначе всё остаётся так же и объект пересоздаётся
            { ...todo };
      })
    );
  };

  //Обработчик для удаления завершённых задач
  const deleteCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const resetHandler = () => {
    setTodos([]);
  };
  return (
    <div className="App">
      <div className={styles.mainBlock}>
        <h1>Todo application</h1>
        {/* addTodoHAndler - передаём обработчик */}
        <TodoForm addTodo={addTodoHandler} />
        <TodosActions
          todos={todos}
          deleteCompleted={deleteCompletedHandler}
          reset={resetHandler}
        />
        {/* Передаём массив */}
        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          toggleTodo={toggleTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
