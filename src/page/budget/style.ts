import { styled } from "styled-components";
import { blue, purpleGradient } from "../../theme";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

`
export const Header = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  position: relative;
  
`
export const HeaderTitle = styled.div`
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem 0;
`
export const Title = styled.h1`
  color:  ${(props) => props.theme.textPrimary};
  font-size: 18pt;
  font-weight: bold;
  margin: 0;
`
export const SubTitle = styled.h2`
  color: ${(props) => props.theme.transparent};
  font-size: 12pt;
  font-weight: normal;
  margin: 0;
`
export const HeaderForm = styled.div`
  width:100%;
  display: grid;
  grid-template-columns: 1fr 8rem 10rem auto;
  gap: 2rem; 
`
export const Select = styled.select`
  padding: 8px;
  border: 1px solid ${props => props.theme.transparent};
  background-color: transparent;
  color: ${(props) => props.theme.transparent};
  border-radius: 4px;
`
export const Input = styled.input`
  padding: 8px;
  border: 1px solid ${props => props.theme.transparent};
  background-color: transparent;
  color: ${(props) => props.theme.transparent};
  border-radius: 4px;
`
export const InputMoney = styled.input`
  padding: 8px;
  border: 1px solid ${props => props.theme.transparent};
  background-color: transparent;
  color: ${(props) => props.theme.transparent};
  border-radius: 4px;
`
export const Container = styled.div`
  width:100%;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const BoxList = styled.div`
  width:100%;
`
export const BoxListTitle = styled.h1`
  font-size: 12pt;
  font-weight: bold;
  color: ${props => props.theme.textPrimary };
`
export const List = styled.ul`
  width:100%;
  list-style: none;
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap:2rem;
`


export const AccountingRecordItemLi = styled.li`
  display: grid;
  grid-template-columns: 1fr auto auto ;
  gap: 2rem; 
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.transparent};
  color: ${(props) => props.theme.transparent};
`
export const AccountingRecordItemLiSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`