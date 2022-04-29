import styled from "styled-components";

export const Button = styled.button`
  border: none;
  background-color: #103778;
  color: #ccd;
  padding: 7px 14px;
  margin: 10px;
  border-radius: 20px;
  transition: 0.2s;
  font-size: 1.1rem;
  &:hover {
    border-radius: 2px;
  }
`;

/*${(props) =>
  props.version === "danger" ? "crimson" : "#1a1a1f"};*/
