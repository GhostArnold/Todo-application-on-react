function Todo({ todo, index, deleteTodo }) {
  // Выводим todo
  return (
    <div>
      {/* Передаём калбэк в событие двойного клика и там вызываем фильтрацию, куда пишем параметр индекса при переборе*/}
      <div onDoubleClick={() => deleteTodo(index)}>{todo}</div>
    </div>
  );
}
export default Todo;
