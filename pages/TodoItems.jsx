import { useSelector } from "react-redux";

export default function TodoItems(props) {

  const { onClickDone, onClickDelete } = props;

  const todos = useSelector(state => state.todos);
  console.log(todos);
  
  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <b>{todo.title}</b> {/* // <b></b> same line  */}
            {todo.done ? <button className="text-green-500" onClick={() => {
                onClickDone(todo)}}>Done</button> : <button className="text-red-500" onClick={() => {
                  onClickDone(todo)}}>Done</button> }
              {/* // kanske inefficient att återskapa hela knappen varje gång? bättre att bara bytta class? */}
            <button onClick={() => {
              onClickDelete(todo)
            }}>Delete</button>
          </li>
          
        ))}
      </ul>
    </div>
  );


}


