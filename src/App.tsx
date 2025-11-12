import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { ThemeProvider} from 'styled-components'
import { useEffect, useState } from 'react'

import { GlobalStyle } from './globalStyle'
import { dark,light} from './theme'

import Login from './page/login/index.tsx'
import SignUp from './page/sign_up/index.tsx'


import { styled } from "styled-components";


import ProtectedRoutes from './components/protectedRoutes.tsx'


export default function App() {
  const [theme,setTheme] = useState<boolean>()
  
  const themeSisten = window.matchMedia("(prefers-color-scheme: dark)").matches
  const toggleTheme = (isThemeMode:string) => {
    if (isThemeMode == "dark") {setTheme(true);localStorage.setItem("theme", "dark");};
    if (isThemeMode == "light") {setTheme(false);localStorage.setItem("theme", "light");};
    if (isThemeMode == "system") {setTheme(themeSisten);localStorage.setItem("theme", "system");};
  };

  useEffect(() => {
      const localTheme = localStorage.getItem("theme");
      if (localTheme === null) {
        localStorage.setItem("theme", "dark");
      }else{
        toggleTheme(localTheme)
      }
    });

  return (
    <ThemeProvider  theme={theme?dark:light}>
      <GlobalStyle/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/app" element={<ProtectedRoutes toggleTheme={(i)=>toggleTheme(i)}/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
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
