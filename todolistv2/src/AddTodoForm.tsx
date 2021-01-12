import React, { useState } from 'react';
import styled from 'styled-components';

interface Props{
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<Props> = ({addTodo}) =>{
    const [text,setText] = useState('');

    return(
        <ToDoForm>
            <FormInput 
                type = "text"
                value = {text}
                onChange={e => {
                    setText(e.target.value);
                }}      
            >

            </FormInput>
            <FormButton
                type="submit"
                onClick={e => {
                    e.preventDefault();
                    addTodo(text);
                    setText('');
                }}
            >
                Add Todo
            </FormButton>
        </ToDoForm>
    )
}

const ToDoForm = styled.form`

`
const FormInput = styled.input`

`

const FormButton = styled.button`

`


