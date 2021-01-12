import React, {useState} from 'react';
import { AddTodoForm } from './AddTodoForm';
import {TodoList} from './TodoList'

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

  const addTodo: AddTodo = (text:string) => {
    const newTodo = {text, complete: false};
    setTodos([...todos,newTodo]);
  };


  return(
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <AddTodoForm addTodo={addTodo} />
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
