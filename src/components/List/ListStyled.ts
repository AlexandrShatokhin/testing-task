import { styled } from "styled-components";

export const ListTasks = styled.ul`
	list-style: url("https://2c72e5da-9f21-45c5-ac53-3bf05dc3caf0.mdnplay.dev/shared-assets/images/examples/rocket.svg");
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 12px;
  margin: 24px 0;
  padding: 16px;
  border-radius: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterButton = styled.button`
  padding: 10px 24px;
  border: 2px solid;
  background-color: #146df3;
  color: #fff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    background-color: #3a5a80;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(74, 111, 165, 0.3)};
  }
`;
