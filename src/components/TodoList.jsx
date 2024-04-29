import Todo from './Todo';
function TodoList({ todos }) {
  // Используем метод map() для преобразования каждого элемента массива todos в компонент Todo.
  //todo - возвращает то, что и калбэк, то есть элементы массива и каждый раз оно заново всё перебирает
  return todos.map((todo, index) => <Todo key={index} todo={todo} />);
}
export default TodoList;
