import styled from 'styled-components';
import { blue} from '../../theme';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f0f2f5;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 24rem;
  padding: 4rem 2rem;
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.459);
  position: relative;

`;

export const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: ${blue}; 
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
  letter-spacing: 1px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;