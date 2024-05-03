import Todo from './Todo';
import styles from './TodoList.module.css';
function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.todoList}>
      {/* Если у todos нет длинны, тогда надпись о том, что массив пустоц */}
      {!todos.length && <h2>Todo list is empty</h2>}
      {/* Используем метод map() для преобразования каждого элемента массива todos в компонент Todo */}
      {/* todo - возвращает то, что и калбэк, то есть элементы массива и каждый раз оно заново всё перебирает */}
      {todos.map((todo) => (
        // deleteTodo - фильтрауия по индексу, index - параметр для deleteTodo, todo - элемент массива
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
