import styles from './Button.module.css';

// Компонент кнопки
// onClick - обработчик события клика
// children - содержимое кнопки (обычно текст или элементы JSX)
// title - всплывающая подсказка при наведении курсора на кнопку
// disable - флаг, указывающий, должна ли быть кнопка неактивной
function Button({ onClick, children, title, disable = false }) {
  return (
    <button
      // Применяем CSS класс стилей кнопки из модуля Button.module.css
      className={styles.blockButton}
      // При клике на кнопку вызываем переданный обработчик события onClick
      onClick={onClick}
      // Устанавливаем всплывающую подсказку для кнопки
      title={title}
      // Устанавливаем атрибут disable, чтобы определить активность кнопки
      disable={disable}
    >
      {/* Отображаем содержимое кнопки */}
      {children}
    </button>
  );
}

export default Button;
