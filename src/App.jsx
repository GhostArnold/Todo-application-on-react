import './App.css';
//Импорт компонента TodoForm
import TodoForm from './components/TodoForm';
function App() {
  return (
    <div className="App">
      <h1>Todo application</h1>
      <TodoForm />
    </div>
  );
}

export default App;
