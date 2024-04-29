import styles from './Todo.module.css';
function Todo({ todo, index, deleteTodo }) {
  // Выводим todo
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      {/* Передаём калбэк в событие двойного клика и там вызываем фильтрацию, куда пишем параметр индекса при переборе*/}
      <div className={styles.todoItem}>{todo}</div>
    </div>
  );
}
export default Todo;
