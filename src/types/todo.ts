export default interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

export type Filter = "all" | "completed" | "active";

export interface TodosState {
    items: Todo[];
    filter: Filter;
}
