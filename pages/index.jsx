import { addTodo, deleteTodo, updateTodos } from '@/TodoSlice';
import { useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoItems from './TodoItems';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { preloadedState } from '@/store';



let nextId = 1; // should I save this to useState and localStorage? Probably not needed?

function App() {

  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch();

  useEffect( () => {
   const initialState = preloadedState == undefined ? [] : preloadedState;
   dispatch ( updateTodos(initialState))
  }, [])


  function clearStorage() {
   // localStorage.clear(); // clear everything!!
    // localStorage.removeItem('todos'); // only clears the storage, remember to remove what is shown currently on the website as well!

    // setTodos([]); 
    dispatch ( updateTodos([]) ) // only need this since the useEffect (above this function) runs again when todos changes!
  } 

  function handleAddTodo(title) {
      /* setTodos([...todos, {
          id: nextId++,   
          title: title,
          done: false
        }
      ]) */
      dispatch(
        addTodo(
          //{id: nextId++,   
          {id: nanoid(),   
          title: title,
          done: false}
        )
      )
  }


  function handleDone(clickedTodo) {

    const updatedTodos = todos.map( todo => {
      if (todo.id === clickedTodo.id) {
        return {
          ...todo,
          done: !todo.done
        }
      }
      return todo; // return the other todos as normal
    })

    /* setTodos(updatedTodos) */
    dispatch(
      updateTodos(updatedTodos) // instead of overwriting the state, should we just edit the clicked item?
    )
  }

  function handleDelete(clickedTodo) {
    // setTodos(filteredTodos)
    //dispatch(updateTodos( filteredTodos ));

    console.log(clickedTodo.id);
    dispatch(deleteTodo({id: clickedTodo.id} ));
  }

  return (
    <>
    <div>
      <div>
        <AddTodo onClickAdd={handleAddTodo}/>
      </div>
     
      <div>
        <TodoItems onClickDone={handleDone} onClickDelete={handleDelete}/>
      </div>

      <button onClick={() => clearStorage()}>
          Clear Storage
      </button>

    </div>

    </>
  )
}

export default App
