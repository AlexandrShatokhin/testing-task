import { useDispatch } from "react-redux";
import { addTodo } from "../../store/todosSlice/todosSlice";
import { useState } from "react";
import { Button, ContainerDiv, InputMain } from "./InnerStyled";

export const Inner = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (text.trim() === "") {
            return;
        }
        dispatch(addTodo(text));
        setText("");
    };
    const handleKeyEnter = (e: string) => {
        if (e === "Enter") {
            handleAdd();
        }
    };

    return (
        <ContainerDiv>
            <InputMain
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Новая задача"
                onKeyDown={(e) => handleKeyEnter(e.key)}
            />
            <Button onClick={handleAdd}>Добавить</Button>
        </ContainerDiv>
    );
};
