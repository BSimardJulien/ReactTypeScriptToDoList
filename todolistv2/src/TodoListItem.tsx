import React from 'react';
import styled from 'styled-components';


interface Props {
    todo : Todo;
    toggleTodo : ToggleTodo;
    removeTodo: RemoveTodo;
}

export const TodoListItem: React.FC<Props> = ({todo,toggleTodo,removeTodo}) => {
    return(
        <ItemList>
            <ItemLabel{...todo}>
                <ItemInput type="checkbox" 
                checked={todo.complete} 
                onClick={()=>{
                    toggleTodo(todo)
                }}> 
                </ItemInput>
                {todo.text}
            </ItemLabel>
            <DeleteButton
                onClick={()=>{
                    removeTodo(todo);
                }}>
                Delete Item
            </DeleteButton>
        </ItemList>
    )
}


const ItemList = styled.li`
    text-align : center;
    width:30%;

`

const ItemLabel = styled.label<Todo>`
    text-decoration: ${(props)=>props.complete? 'line-through' : undefined};
    padding-right : 10%;
`

const ItemInput = styled.input`
    
`

const DeleteButton = styled.button`
`




