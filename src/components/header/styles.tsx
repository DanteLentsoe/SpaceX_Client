import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 0em;
  top: 0em;
  height: 60px;
  width: 100%;
  background-color: #000;
  position: fixed;
  z-index: 10;
  display: inline-flex;
`;

export const HeaderColorModeIcon = styled.div`
  position: absolute;
  padding: 10px;
  right: 0px;
`;

export const LogoDrawerHeader = styled.div`
  height: auto;
  width: 100%;
  background-color: #000;
`;

export const NavBarItems = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-self: stretch;
  align-items: center;
  white-space: nowrap;
  background: transparent;
  justify-content: flex-start;
  transition: background 0.2s ease;

  &:hover {
    transition: background 0.2s ease;
    background: #000;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    cursor: pointer;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
  }
`;

export const NavLinks = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 100px;
  font-size: 22px;
  font-weight: 500;
`;
