import { RiDeleteBack2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';
function Todo({ todo, deleteTodo, toggleTodo }) {
  // Выводим todo
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      {/* Передаём калбэк в событие двойного клика и там вызываем фильтрацию, куда пишем параметр индекса при переборе*/}
      <div className={styles.todoItem}>{todo.text}</div>
      <div className={styles.icons}>
        <RiDeleteBack2Line
          className={styles.deleteIcon}
          // Удаление по клику
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.completeIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>
    </div>
  );
}
export default Todo;
