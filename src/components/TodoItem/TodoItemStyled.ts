import { styled } from "styled-components";

export const EditItemWrapper = styled.li`
    width: 800px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`;

export const Checkbox = styled.input.attrs({ type: "checkbox" })`
    width: 25px;
    height: 25px;
`;

export const TextSpan = styled.span<{ $completed: boolean }>`
    flex: 1;
    font-size: 32px;
    color: rgb(37, 100, 245);
    width: 400px;
    text-decoration: ${({ $completed }) =>
        $completed ? "line-through" : "none"};
`;

interface ButtonProps {
    variant: "edit" | "delete" | "save" | "cancel";
}

export const Button = styled.button<ButtonProps>`
    padding: 10px 16px;
    font-size: 14px;
    cursor: pointer;
    border: none;
    border-radius: 4px;

    ${(props) =>
        (props.variant === "edit" || props.variant === "save") &&
        `
    background-color: green;
    color: white;
`}

    ${(props) =>
        (props.variant === "delete" || props.variant === "cancel") &&
        `
    background-color:rgb(241, 37, 37);
    color: white;
`}
`;
