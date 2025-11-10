import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #f0f0f0;
  width: 100%;
  height: 100vh;

`
export const Container = styled.div`
  width:calc(100% - 320px);
  padding: 80px 40px;
`
export const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 8%;
  gap: 10px;
  color: #333;
`;
export const ThemeButtonContainer = styled.button`
  width: 200px;
  height: 100px;
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: 2px solid ${(props) => props.theme.transparent}; 
  border-radius: 5px;
  padding: 5px;
  img {
    width: 18%;
    height: auto;
  }
`;
export const ThemeButtonIcon = styled.img`
  ${(props)=>props.theme.titleTheme == "dark"? "filter: invert(1)" : "filter: invert(0)"}
`;
export const ThemeButtonTitle = styled.p`
  color:${(props) => props.theme.primary};
  font-size:0.9rem;
  font-weight: bold;
`