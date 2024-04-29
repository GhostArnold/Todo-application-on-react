import Todo from './Todo';
function TodoList({ todos, deleteTodo }) {
  // Используем метод map() для преобразования каждого элемента массива todos в компонент Todo.
  //todo - возвращает то, что и калбэк, то есть элементы массива и каждый раз оно заново всё перебирает
  return todos.map((todo, index) => (
    // deleteTodo - фильтрауия по индексу, index - параметр для deleteTodo, todo - элемент массиваъ
    <Todo key={index} todo={todo} deleteTodo={deleteTodo} index={index} />
  ));
}
export default TodoList;
