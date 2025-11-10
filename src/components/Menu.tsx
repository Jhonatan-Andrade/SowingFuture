
import { styled } from "styled-components";
import { blue, greenGradient,  } from "../theme";
import { useEffect, useState } from "react";
import { fetchDashboard } from "../api/auth";

function MenuItem(props:{
  iconSrc:string,
  iconAlt:string
  title:string,
  page:string,
  selected:boolean
  onSelect:()=>void
}) {
  return(
        <MenuLink 
          onClick={()=>props.onSelect()} 
          style={props.selected ? {
            backgroundColor:blue,
            color:'#fff',
          }:{}}
        >
          <MenuItemIcon
            src={props.iconSrc} 
            alt={props.iconAlt} 
            typeof='image/svg+xml'
            selected={props.selected}
          />
          <MenuItemTitle>
            {props.title}
          </MenuItemTitle>  
        </MenuLink>
  )
}
interface User {
  id: number;
  name: string;
  email: string;
}
function MenuUser(){
  const [user,setUser] = useState<User>() 
  const userLocal = localStorage.getItem("user")
  useEffect(()=>{
    if(userLocal){
      setUser(JSON.parse(userLocal))
    }
  },[])
  return(
    <>
      {user&&
        <UserContainer>
            <UserAvatar>
              {user.name.charAt(0).toUpperCase()}
            </UserAvatar>
            <UserAbout>
              <UserName>{user.name}</UserName>
              <UserEmail>{user.email}</UserEmail>
            </UserAbout>
        </UserContainer>
      }
    </>
  )
}

interface MenuProps {
  screen:string,
  setScreen:(screen:string)=>void
}
export default function Menu({screen,setScreen}:MenuProps) {

  return (
    <MenuContainer>
      <MenuTitle>
        Sowing Future
      </MenuTitle>
      <MenuItems>
        <MenuItem 
          iconSrc="./menuIcons/dashboard.svg" 
          iconAlt="dashboard icon" 
          title="Dashboard" 
          page ="dashboard"
          selected={screen == 'dashboard' ? true : false}
          onSelect={()=>setScreen('dashboard')}
        />
        <MenuItem 
          iconSrc="./menuIcons/dollar.svg" 
          iconAlt="transação icon" 
          title="Transação"
          page ="transacao"
          selected={screen == 'transacao' ? true : false}
          onSelect={()=>setScreen('transacao')}
        />
        <MenuItem 
          iconSrc="./menuIcons/wallet.svg" 
          iconAlt="orçamento icon" 
          title="Orçamento" 
          page ="orcamento"
          selected={screen == 'orcamento' ? true : false}
          onSelect={()=>setScreen('orcamento')}
        />
        <MenuItem 
          iconSrc="./menuIcons/goal.svg" 
          iconAlt="métas icon" 
          title="Métas"
          page ="metas"
          selected={screen == 'metas' ? true : false}
          onSelect={()=>setScreen('metas')}
        />
        <MenuItem 
          iconSrc="./menuIcons/setting.svg" 
          iconAlt="configuração icon" 
          title="Configuração"
          page ="setting"
          selected={screen == 'setting' ? true : false}
          onSelect={()=>setScreen('setting')}
        />
      </MenuItems>
      <MenuUser/>
    </MenuContainer>
  );
}


export const MenuContainer = styled.div`
  background-color: ${greenGradient};
  width: 280px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
`;
export const MenuTitle = styled.h1`

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${blue};
  color: ${(props) => props.theme.textSecondary};
  padding: 24px 32px;
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;
export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding:  0;
  margin: 0;
  width: 100%;
  height: calc(100vh - 200px);
  padding-top: 32px;
`;
export const MenuLink = styled.button`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
  padding: 12px 16px;
  color: ${(props) => props.theme.textPrimary};
  background-color: transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  margin: 0.1rem 0;
`;
export const MenuItemIcon = styled.img<{selected:boolean}>`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  
  ${(props)=>props.theme.titleTheme == "dark" || props.selected? "filter: invert(1)" : "filter: invert(0)"}
 
`;
export const MenuItemTitle = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
`;
export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content:center ;
  gap: 16px;
  height: 124px;
  padding: 0 20px;
`
export const UserAvatar = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${props=>props.theme.secondary};
  border-radius: 50%;
  background-color:${props=>props.theme.primary};

  `
export const UserAbout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const UserName = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: ${props=>props.theme.textPrimary};
`
export const UserEmail = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  color: ${props=>props.theme.transparent};
`


