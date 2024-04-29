import Todo from './Todo';
import styles from './TodoList.module.css';
function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoList}>
      {/* Используем метод map() для преобразования каждого элемента массива todos в компонент Todo */}
      {/* todo - возвращает то, что и калбэк, то есть элементы массива и каждый раз оно заново всё перебирает */}
      {todos.map((todo, index) => (
        // deleteTodo - фильтрауия по индексу, index - параметр для deleteTodo, todo - элемент массива
        <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}
export default TodoList;
