import { useState } from 'react';
import styles from './TodoForm.module.css';
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
    <div className={styles.submitForm}>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          name="todo input"
          placeholder="What is the task today?"
          // Значение поля ввода привязано к состоянию "text", чтобы отслеживать изменения в этом поле.
          value={text}
          // При изменении текста вызывается функция setText, которая обновляет состояние "text"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default TodoForm;
