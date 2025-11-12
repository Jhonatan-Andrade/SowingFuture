import { useState } from 'react'
import {InputGroup, Input, Button, Label, Link, ErrorMessage } from './styles';
import { validateEmail, validatePassword } from '../../api/validateLogin';
import { AboutPassword } from '../aboutPassword';


export interface UserSignin {
  name: string;
  email: string;
  password: string;
}
interface FormSigninProps {
  onSubmit: (data: UserSignin) => void;
  isLoad: boolean;
}

export default function FormSignin({ onSubmit,isLoad }: FormSigninProps) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorPassword, setErrorPassword] = useState<boolean>(false);
  const [errorConfirmPassword, setErrorConfirmPassword] = useState<boolean>(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() === '' || name.length < 3) {
      setErrorName(true);
      return;
    }
    if (!validateEmail(email)) {
      setErrorEmail(true);
      return;
    }
    if (!validatePassword(password)) {
      setErrorPassword(true);
      return;
    }
    if (password !== confirmPassword) {
      setErrorConfirmPassword(true);
      return;
    }
    setErrorName(false);
    setErrorEmail(false);
    setErrorPassword(false);
    setErrorConfirmPassword(false);
    onSubmit({ name,email, password });
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form className='form-Signin'  onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="name">Name:</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => {setName(e.target.value);setErrorName(false)}}
          required
          autoComplete='none'
        />
      </InputGroup>
      <ErrorMessage style={{ color: errorName ? 'red' : 'transparent' }}>Nome inválido deve ter pelo menos 3 caracteres</ErrorMessage>
      <InputGroup>
        <Label htmlFor="email">Email:</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value);setErrorEmail(false)}}
        />
      </InputGroup>
      <ErrorMessage style={{ color: errorEmail ? 'red' : 'transparent' }}>Email inválido</ErrorMessage>
      <InputGroup>
        <Label htmlFor="password">Password:</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value);setErrorPassword(false)}}
        />
      </InputGroup>
      <ErrorMessage style={{ color: errorPassword ? 'red' : 'transparent' }}>Senha inválida
        {errorPassword && <AboutPassword/>}
      </ErrorMessage>
      <InputGroup>
        <Label htmlFor="confirmPassword">Confirm Password:</Label>
        <Input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {setConfirmPassword(e.target.value);setErrorConfirmPassword(false)}}
        />
      </InputGroup>
      <ErrorMessage style={{ color: errorConfirmPassword ? 'red' : 'transparent' }}>As senhas não coincidem
        {errorConfirmPassword && <AboutPassword/>}
      </ErrorMessage>
      <Button disabled={isLoad} type="submit" >{isLoad ? 'Carregando...' : 'Criar Conta'}</Button>
      <Link href="/">Voltar para Login</Link>
    </form>
  );
}
