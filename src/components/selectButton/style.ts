import styled from "styled-components"

export const  Select = styled.select`
    padding: 8px;
    border: 1px solid ${props => props.theme.transparent};
    background-color: transparent;
    color: ${(props) => props.theme.transparent};
    border-radius: 4px;
`      