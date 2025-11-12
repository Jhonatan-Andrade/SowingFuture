

import { useState } from 'react';
import { signup } from '../../api/auth';
import FormSignin, { type UserSignin } from '../../components/formAuth/signin';
import {Container, SignUpContainer, SignUpTitle } from './style'
const SignUpFailed = ({disabled}:{disabled:boolean})=>{
  return (
      <h1 style={{
        position:"absolute",
        top:"24%",
        padding:20,
        color:"#e95b5b",
        fontSize:"0.8rem",
        fontWeight:"bold"
      }}>
        {disabled ? 'Erro ao cadastrar.' : ''}
      </h1>
  )
}
function SignUp() {
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [signUpFailed, setSignUpFailed] = useState<boolean>(false);
  const FormSubmit = async (props: UserSignin) => {
    try {
      setIsLoad(true);
      const data = await signup(props.name,props.email,props.password);
      if(data) {
        localStorage.setItem("token", data.token);
        setIsLoad(false);
        window.location.href = "/app";
      }
    } catch (error) {
      setIsLoad(false);
      setSignUpFailed(true);
      setTimeout(() => {
        setSignUpFailed(false);
      }, 3000);
    }
  }
  return (
    <Container>
      <SignUpContainer>
        <SignUpTitle>Sowing Future</SignUpTitle>
        <SignUpFailed disabled={signUpFailed}/>
        <FormSignin onSubmit={FormSubmit} isLoad={isLoad} />
      </SignUpContainer>
    </Container>
  )
}

export default SignUp
