interface Todo{
    text: string;
    complete: boolean;
}

type ToggleTodo = (selectedTodo : todo) => void;

type AddTodo = (text : string) => void;

type RemoveTodo = (selectedTodo: todo) => void;