import styled from "styled-components"
import { blue } from "../../theme"

export const SelectButtonInput = styled.div`
    display:flex;
    flex-direction: column;
    gap:0.2rem;
`
export const  Select = styled.div`
  width: 100%;
  padding: 8px;
  margin: 4px 0;
  border: 1px solid ${props => props.theme.transparent};
  background-color: transparent;
  color: ${(props) => props.theme.textPrimary};
  border-radius: 4px;
  font-size: 11pt ;
`  
export const  SelectOption = styled.ul`
    display:flex;
    flex-direction:column;
    position: relative;
    gap: 0.1rem;
    border: 1px solid ${(props) => props.theme.transparent};
    border-radius: 4px;
    background-color:${(props) => props.theme.background};
    list-style:none;
`  
export const  OptionLI = styled.li`
    font-size: 11pt ;
    color: ${(props) => props.theme.textPrimary};
    padding: 8px;
    &:hover{
      background-color:${blue}; 
      color: ${(props) => props.theme.textSecondary}; 
    }
`                              