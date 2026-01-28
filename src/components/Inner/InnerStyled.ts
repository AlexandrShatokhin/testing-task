import { styled } from "styled-components";

export const ContainerDiv = styled.div`
  position: relative;
  margin: 24px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputMain = styled.input`
  padding: 8px;
  font-size: 24px;
  width: 600px;
  border: 1px solid rgb(37, 100, 245);
  margin-right: 20px;
  border-radius: 8px;
  transition: 0.2s;
  &:focus {
    outline: none;
    box-shadow: 3px 4px 4px rgb(37, 100, 245);
  }
`;

export const Button = styled.button`
  font-size: 17px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  background-color: rgb(37, 100, 245);
  box-shadow: 0 4px 15px rgba(0, 114, 255, 0.3);
  transition: all 0.3s ease;

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  &:focus {
    outline: none;
    box-shadow: 
      0 0 0 4px rgba(0,198,255,0.3),
      inset 0 0 8px rgba(0,114,255,0.3);
`;

export const ErrorText = styled.p`
  position: absolute;
  color: red;
  font-size: 24px;
`;
