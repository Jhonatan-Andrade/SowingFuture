import { useState } from 'react'
import {InputGroup, Input, Button, Label, Link, ErrorMessage } from './styles';
import { validateEmail, validatePassword } from '../../api/validateLogin';
import { AboutPassword } from '../aboutPassword';


export interface UserLogin {
  email: string;
  password: string;
}
interface FormLoginProps {
  onSubmit: (data: UserLogin) => void;
  isLoad: boolean;
}

export default function FormLogin({ onSubmit,isLoad }: FormLoginProps) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorEmail(true);
      return;
    }else{
      setErrorEmail(false);
    }
    if (!validatePassword(password)) {
      setErrorPassword(true);
      return;
    }else{
      setErrorPassword(false);
    }
    onSubmit({ email, password });
    setEmail('');
    setPassword('');
  };

  return (
    <form className='form-login'  onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </InputGroup>
      <ErrorMessage style={{ color: errorEmail ? 'red' : 'transparent' }}>Email inválido</ErrorMessage>
      <InputGroup>
        <Label htmlFor="password">Password: </Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
       
        />
      </InputGroup>

      <ErrorMessage style={{ color: errorPassword ? 'red' : 'transparent' }}>Senha inválida  
      {errorPassword && <AboutPassword/>}
      </ErrorMessage>
      <Button disabled={isLoad} type="submit" >{isLoad ? 'Carregando...' : 'Login'}</Button>
      <Link href="/signup">Não tem uma conta? Cadastre-se</Link>
    </form>
  );
}
