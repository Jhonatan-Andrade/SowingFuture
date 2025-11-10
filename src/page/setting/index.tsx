


import { ThemeButtonContainer, ThemeButtonIcon, ThemeButtonTitle, ThemeContainer } from './style';
import { useEffect, useState } from 'react';
import { blue } from '../../theme';

interface ThemeButtonProps {
  onClick:()=>void
  src:string
  alt:string
  title:string
  btnSelection:boolean
}
function ThemeButton({onClick,src,alt,title,btnSelection}:ThemeButtonProps) {
  return(
    <ThemeButtonContainer style={btnSelection?{borderColor:blue}:{}} onClick={()=>{onClick()}}>
      <ThemeButtonIcon
        src={src}
        alt={alt}
        typeof='image/svg+xml'
      />
      <ThemeButtonTitle>
        {title}
      </ThemeButtonTitle>

    </ThemeButtonContainer>
  )
}

export default function Setting({toggleTheme}:{toggleTheme:(isThemeMode:string)=>void}) {
  const themeMode = localStorage.getItem("theme")
  const [btnSelection,setBtnSelection] = useState<string>(themeMode!)
  return (
    <>
      <ThemeContainer>
        <ThemeButton
          src="./settingIcons/sun.svg"
          alt="Mudar para light"
          onClick={()=>{toggleTheme("light");setBtnSelection("light")}}
          title="Claro"
          btnSelection={btnSelection === "light"?true:false}
        />
        <ThemeButton
          src="./settingIcons/moon.svg"
          alt="Mudar para dark"
          onClick={()=>{toggleTheme("dark");setBtnSelection("dark")}}
          title="Escuro"
          btnSelection={btnSelection === "dark"?true:false}
        />
        <ThemeButton
          src="./settingIcons/system.svg"
          alt="Mudar para teme do sistema"
          onClick={()=> {toggleTheme("system");setBtnSelection("system")}}
          title="Sistema"
          btnSelection={btnSelection === "system"?true:false}
        />
      </ThemeContainer>
    </>
  )
}