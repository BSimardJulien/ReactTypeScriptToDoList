import React from 'react';
import styled from 'styled-components';


interface Props {
    todo : Todo;
    toggleTodo : ToggleTodo;
}

export const TodoListItem: React.FC<Props> = ({todo,toggleTodo}) => {
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
        </ItemList>
    )
}


const ItemList = styled.li`
    text-align : center;
    width:30%;

`

const ItemLabel = styled.label<Todo>`
    text-decoration: ${(props)=>props.complete? 'line-through' : undefined}
`

const ItemInput = styled.input`
    
`




