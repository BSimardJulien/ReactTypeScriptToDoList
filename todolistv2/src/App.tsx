import React, {useState} from 'react';
import {TodoListItem} from './TodoListItem'

function App(){
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo=>{
      if(todo===selectedTodo){
        return{
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return(
    <>
      <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
      <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
    </>
  );
}

export default App;

const initialTodos : Todo[] = [
  {
    text: 'walk the dog',
    complete: false
  },
  {
    text: 'yeeet',
    complete: true,
  },
];
