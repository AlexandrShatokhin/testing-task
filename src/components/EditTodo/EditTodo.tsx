import { useState } from "react";
import { EditItemWrapper, Button } from "../TodoItem/TodoItemStyled";
import { InputMain } from "../Inner/InnerStyled";

interface EditTodoProps {
  initialText: string;
  onSave: (newText: string) => void;
  onCancel: () => void;
}

const EditTodo = ({ initialText, onSave, onCancel }: EditTodoProps) => {
  const [text, setText] = useState(initialText);
  const handleKeyEnter = (e: string) => {
    if (e === "Enter") {
      onSave(text);
    }
  };

  return (
    <EditItemWrapper>
      <InputMain
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => handleKeyEnter(e.key)}
      />
      <Button variant="save" onClick={() => onSave(text)}>
        Сохранить
      </Button>
      <Button variant="cancel" onClick={onCancel}>
        Отмена
      </Button>
    </EditItemWrapper>
  );
};

export default EditTodo;
