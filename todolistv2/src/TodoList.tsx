import React from 'react';
import {TodoListItem} from './TodoListItem'
import styled from 'styled-components';


interface Props {
    todos : Todo [];
    toggleTodo : ToggleTodo;
}

export const TodoList: React.FC<Props> = ({todos,toggleTodo})=>{
    return(
        <ListItem>
            {todos.map(todo=>(
                <TodoListItem key ={todo.text} todo ={todo} toggleTodo={toggleTodo} />
            ))}
        </ListItem>
    )
}

const ListItem = styled.ul`
    background-color: pink;
    display:flex;
    flex-direction:column;
    justify-content:center;
`