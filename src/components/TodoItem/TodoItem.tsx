import { useDispatch } from "react-redux";
import type Todo from "../../types/todo";
import {
    editTodo,
    removeTodo,
    toggleTodo,
} from "../../store/todosSlice/todosSlice";
import { EditItemWrapper, Checkbox, TextSpan, Button } from "./TodoItemStyled";
import { useState } from "react";
import EditTodo from "../EditTodo/EditTodo";

interface PropsTodo {
    todo: Todo;
}

const TodoItem = ({ todo }: PropsTodo) => {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const handleUpdate = (text: string) => {
        dispatch(editTodo({ id: todo.id, text }));
        setIsEditing(false);
    };
    return (
        <EditItemWrapper>
            {isEditing ? (
                <EditTodo
                    initialText={todo.text}
                    onSave={handleUpdate}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <>
                    <Checkbox
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => dispatch(toggleTodo(todo.id))}
                    />
                    <TextSpan $completed={todo.completed}>{todo.text}</TextSpan>
                    <Button variant="edit" onClick={() => setIsEditing(true)}>
                        Редактировать
                    </Button>
                    <Button
                        variant="delete"
                        onClick={() => dispatch(removeTodo(todo.id))}
                    >
                        Удалить
                    </Button>
                </>
            )}
        </EditItemWrapper>
    );
};

export default TodoItem;
