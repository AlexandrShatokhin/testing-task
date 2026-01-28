import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import TodoItem from "../TodoItem/TodoItem";
import { FilterButton, FilterContainer, ListTasks } from "./ListStyled";
import { setFilter } from "../../store/todosSlice/todosSlice";

const List = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => {
        const { items, filter } = state.todos;

        switch (filter) {
            case "completed":
                return items.filter((todo) => todo.completed);
            case "active":
                return items.filter((todo) => !todo.completed);
            default:
                return items;
        }
    });
    return (
        <ListTasks>
            <FilterContainer>
                <FilterButton onClick={() => dispatch(setFilter("all"))}>Все</FilterButton>
                <FilterButton onClick={() => dispatch(setFilter("active"))}>
                    Активные
                </FilterButton>
                <FilterButton onClick={() => dispatch(setFilter("completed"))}>
                    Выполненные
                </FilterButton>
            </FilterContainer>
            {todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} />
            ))}
        </ListTasks>
    );
};

export default List;
