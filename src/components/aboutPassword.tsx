import { useState } from "react";

export const AboutPassword = ()=>{
  const [boxTest, setBoxTest] = useState<boolean>(false);
  return (
  <div style={{
    position:"relative"
  }}>
      <button onClick={() => {
        setBoxTest(!boxTest);
        setTimeout(() => {
          setBoxTest(false);
        }, 5000);
      }} style={{
      borderRadius:"50%",
      width:"20px",
      height:"20px",
      background:"#1673ff",
      color:"#ffffff"
    }}> ? </button>

    {
      boxTest ? <div style={{
        display:"flex",
        flexDirection:"column",
        position:"absolute",
        bottom:16,
        left:32,
        width:"300px",
        background:"#1673ff",
        padding:"10px 20px",
        borderRadius:"10px 10px 10px 0px",
        border:"2px solid #ffffff3b",
        color:"#fff",
      }}>
        <p>Senha inválida! Certifique-se de que sua senha tenha:</p>
        <p>No mínimo 8 caracteres</p>
        <p>Pelo menos uma letra maiúscula</p>
        <p>Pelo menos uma letra minúscula</p>
        <p>Pelo menos um número</p>
        <p>Pelo menos um caractere especial</p>
      </div>:<></>
    }
  </div>

  )
}