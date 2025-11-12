import styled from "styled-components";
import {green,greenGradient} from "../../theme";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.719);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
export const FormWrapper = styled.form`
    background: #fff;
    padding: 50px 30px;
    border-radius: 16px;
    min-width: 300px;
    display: flex;
    flex-direction: column;
`;
export const Title = styled.h2`
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    padding-bottom: 20px;
`;
export const BoxInput = styled.div`
    width: 100%;
`;
export const BoxInputDouble = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    gap: 10px;
`;
export const BoxInputSmall = styled.div`
    width: 150px;
`;
export const Label = styled.label`
    display: block;
    padding-bottom: 2px;
    font-weight: bold;
    font-size: 14px;
`;
export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;
export const Select = styled.select`
    width: 100%;
    padding: 8px;
    margin-top: 4px;
    border: 1px solid #ccc;
`;
export const ButtonsForm = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding-top: 20px;
`;
export const ButtonCreate = styled.button`
    width: 100%;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background: ${greenGradient};
    color: #fff;
    cursor: pointer;
`;
export const ButtonClose = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    background: #000000;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: ${green};
    }
`;
export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between
`;