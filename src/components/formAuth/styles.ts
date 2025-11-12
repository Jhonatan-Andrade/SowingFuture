
import styled from "styled-components";
import { blueGradient ,blue } from "../../theme";

export const FormLogin = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
`
export const InputGroup = styled.div`
    font-family: 'Segoe UI', sans-serif;
    
    margin: 0.4em 0 ;
    position: relative;
`
export const Label = styled.label`
    width:100%;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.8);
    font-weight: bold;
`
export const Input = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin-top: 0.8rem;
    font-size: 1rem;

    border: 2px solid hsla(0, 0%, 0%, 0.4);
    border-radius: 0.5rem;
    :focus {    
        border-color: hsla(0, 0%, 0%, 0.7);
        outline: none;
    }
`
export const ErrorMessage = styled.div`
    color: red;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Button = styled.button`
    display: flex;
    flex-direction: column;
    background: ${blueGradient};
    width: 100%;
    padding: 0.7rem;
    margin: 1rem auto ;
    border: none;
    border-radius: 0.5rem;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
`
export const Link = styled.a`
    margin-top: 2rem;
    width: 100%;
    text-align: center;
    font-size: 0.9rem;
    font-weight: bold;
    color: ${blue};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
    cursor: pointer;
`