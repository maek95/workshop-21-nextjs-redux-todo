import { createSlice } from "@reduxjs/toolkit";

// localStorage for initialState does not work here (localStorage undefined)?

export const todoSlice = createSlice({
  name: 'todos',
  
  // NOTE: my initialState gives the Warning: VM14205:3 The previous state received by the reducer has unexpected type of "array". Expected argument to be an object with the following keys: "todos" (STILL WORKS THOUGH)

  initialState: [], // initialize state... in index.jsx we have a useEffect which will run once and update state with localStorage (or keep it [] if localStorage is empty)

  reducers: {
    addTodo: (state, action) => {
      // immer built in, dont need spread-operator (...state)
      state.push({ // state är en array(?), lägger till nytt todo-objekt
        id: action.payload.id, 
        title: action.payload.title,
        done: false,
      }) 
    },
    updateTodos: (state, action) => {
      return action.payload;  //state = action.payload;
    },
    deleteTodo: (state, action) => {
      console.log(action.payload.id);
      return state.filter(todo => todo.id !== action.payload.id); // state = filteredState ... 
    },
  }
  
})

export const {addTodo, updateTodos, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;