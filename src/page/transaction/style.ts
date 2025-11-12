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
export const HeaderFilter = styled.div`
  width:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 4rem;
  padding: 1rem 0;
`
export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 4px 0;
  border: 1px solid ${props => props.theme.transparent};
  background-color: transparent;
  color: ${(props) => props.theme.transparent};
  border-radius: 4px;
`
export const ButtonFilter = styled.button`
  padding: 8px;
  margin: 4px 0;
  border: 1px solid ${props => props.theme.transparent};
  border-radius: 4px;
  background-color: transparent;
  color: ${(props) => props.theme.transparent};
`
export const FilterValue = styled.div`
  width: 100% ;
  padding: 8px;
  margin: 4px 0;
  border: 1px solid ${props => props.theme.transparent};
  border-radius: 4px;
  color: ${(props) => props.theme.transparent};
`
export const ButtonCreateTransaction = styled.button`
  width:150px;
  padding:8px;
  border-radius:4px;
  border:none;
  margin-top:1rem;
  background:${purpleGradient};
  color:white;
  position:absolute;
  right:0;
  right:0;
`
export const Container = styled.ul`
  width:100%;
  list-style: none;
  padding: 0;
  margin: 0;
  
`
export const TransactionItemLiHeader = styled.li`
  display: grid;
  grid-template-columns: 1fr 80px 120px 120px 120px 80px 80px;
  gap: 1rem;
  color: ${(props) => props.theme.textPrimary};
  font-weight: bold;
  font-size: 12pt;
  padding: 10px 0;
`
export const TransactionItemLi = styled.li`
  display: grid;
  grid-template-columns: 1fr 80px 120px 120px 120px 80px 80px ;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.transparent};
  color: ${(props) => props.theme.transparent};
`
export const TransactionItemLiSpan = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`