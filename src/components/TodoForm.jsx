import { useState } from 'react';

function TodoForm({ addTodo }) {
  // Состояние хранящее в себе содержимое инпута
  const [text, setText] = useState('');

  //Обработчик для form
  function onSubmitHandler(event) {
    //Чтобы страница не обновлялась
    event.preventDefault();
    // Чтобы текст из инпута добавлялся
    addTodo(text);
    //Чтобы при submit инпут очищался
    setText('');
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="todo input"
        // Значение поля ввода привязано к состоянию "text", чтобы отслеживать изменения в этом поле.
        value={text}
        // При изменении текста вызывается функция setText, которая обновляет состояние "text"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
export default TodoForm;
