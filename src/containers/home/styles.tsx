import styled from "styled-components";

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.h1`
  margin-bottom: 1rem;
  font-size: 24px;
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  /* color: rgb(29, 28, 28); */
  padding: 0.385rem 0.85rem;
  letter-spacing: 0.25rem;
  display: inline-block;
  font-weight: 700;
  transition: all 0.3s linear;
  font-size: 0.875rem;
  border: 2px solid rgb(252, 252, 252);
  cursor: pointer;
  box-shadow: 0 1px 3px rgb(233, 233, 233);
  opacity: 0.9;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: rgb(73, 14, 167);
  }
`;

export const TextSubtitle = styled.div`
  margin-top: 1rem;
`;
