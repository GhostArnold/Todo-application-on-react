import styles from './Todo.module.css';
function Todo({ todo, deleteTodo }) {
  // Выводим todo
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(todo.id)}>
      {/* Передаём калбэк в событие двойного клика и там вызываем фильтрацию, куда пишем параметр индекса при переборе*/}
      <div className={styles.todoItem}>{todo.text}</div>
    </div>
  );
}
export default Todo;
