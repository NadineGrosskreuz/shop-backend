import styled from "styled-components";

export const CardContainer = styled.ul`
  background-color: #0593a2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
  padding: 20px;
  border-radius: 14px;
  opacity: 0.8;
  transition: 0.2s;
  li {
    list-style-type: none;
    color: white;
    font-size: 1.1rem;
  }
`;

/*${({ role }) => (role.includes("admin") ? "hotpink" : "#ccd")};*/
