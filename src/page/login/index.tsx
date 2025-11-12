
import { useState } from 'react';
import { login } from '../../api/auth';
import FormLogin,{ type UserLogin } from '../../components/formAuth/login';
import {Container,LoginContainer,LoginTitle} from './style';
import { red, redGradient } from '../../theme';

const LoginFailed = ({disabled}:{disabled:boolean})=>{
  return (
      <h1 style={{
        position:"absolute",
        top:"24%",
        padding:20,
        color:"#e95b5b",
        fontSize:"0.8rem",
        fontWeight:"bold"
      }}>
        {disabled ? 'Email ou senha incorretos.' : ''}
      </h1>
  )
}
export default function Login() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [loginFailed, setLoginFailed] = useState<boolean>(false);
  const FormSubmit = async (props: UserLogin) => {
    try {
      console.log("Logging in...");
      setIsLoad(true);
      const data = await login(props.email,props.password);
      if(data) {
        localStorage.setItem("token", data.token);
        setIsLoad(false);
        window.location.href = "/app";
      }
    } catch (error) {
      setIsLoad(false);
      setLoginFailed(true);
      setTimeout(() => {
        setLoginFailed(false);
      }, 3000);
    }
  }
  return (
    <Container>
     
      <LoginContainer>
        <LoginTitle>Sowing Future</LoginTitle>
        <LoginFailed disabled={loginFailed}/>
        <FormLogin onSubmit={FormSubmit} isLoad={isLoad} />
      </LoginContainer>
    </Container>
  )
}
