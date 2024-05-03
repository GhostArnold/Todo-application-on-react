import { RiDeleteBack2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
function TodosActions({ deleteCompleted, reset }) {
  return (
    <div>
      <Button onClick={reset} title="Reset todos">
        <RiRefreshLine />
      </Button>
      <Button onClick={deleteCompleted} title="Clear completed todos">
        <RiDeleteBack2Line />
      </Button>
    </div>
  );
}
export default TodosActions;
