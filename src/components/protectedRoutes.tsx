
import Goals from '../page/goals/index.tsx'
import Dashboard from '../page/dashboard/index.tsx'
import Transaction from '../page/transaction/index.tsx'
import Budget from '../page/budget/index.tsx'
import Setting from '../page/setting/index.tsx'
import Menu from '../components/Menu.tsx'

import { styled } from "styled-components";
import { useEffect, useState } from 'react'

import { fetchDashboard } from '../api/auth';

export default function ProtectedRoutes({toggleTheme}: { 
    toggleTheme:(isThemeMode:string)=>any 
 }) {
    const [screen,setScreen] = useState<string>('dashboard')
    useEffect(()=>{
        const fetch = async()=>{return await fetchDashboard()}
        fetch()
        
    },[])
    return (
        <MainContainer>
            <Menu screen={screen} setScreen={setScreen}/>
            <Container>
            {screen == 'dashboard' && <Dashboard />}
            {screen == 'transacao' && <Transaction/>}
            {screen == 'orcamento' && <Budget/>}
            {screen == 'metas' && <Goals/>}
            {screen == 'setting' && <Setting toggleTheme={toggleTheme}/>}
            </Container>
        </MainContainer>
    )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.background};
  color: #333;
  width: 100%;
  height: 100vh;
`
const Container = styled.div`
  width:calc(100% - 320px);
  padding: 80px 40px;
`
