
import { useState } from "react";
import { createTransaction, type TransactionData } from "../../api/transactions";
import { BoxInput, BoxInputDouble, BoxInputSmall, ButtonClose, ButtonCreate, ButtonsForm, Container, ErrorMessage, FormWrapper, Input, Label, Select, Title } from "./style";

function FormTransaction({setOpen, reloadTransactions, onCreateTransaction}: {
    setOpen: (open: boolean) => void
    reloadTransactions: () => void
    onCreateTransaction: (data: TransactionData) => Promise<void>
}) {
    const [errorDescription, setErrorDescription] = useState<boolean>(false);
    const [errorValue, setErrorValue] = useState<boolean>(false);
    const [errorType, setErrorType] = useState<boolean>(false);
    const [errorCategory, setErrorCategory] = useState<boolean>(false);
    const [errorDate, setErrorDate] = useState<boolean>(false);
    const [errorPaymentMethod, setErrorPaymentMethod] = useState<boolean>(false);

    const [description, setDescription] = useState<string>("");
    const [value, setValue] = useState<string>("");
    const [type, setType] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [paymentMethod, setPaymentMethod] = useState<string>("");

    function setMask(valor:string) {
        var valorAlterado = valor
        valorAlterado = valorAlterado.replace(/\D/g, ""); // Remove todos os não dígitos
        valorAlterado = valorAlterado.replace(/(\d+)(\d{2})$/, "$1,$2"); // Adiciona a parte de centavos
        valorAlterado = valorAlterado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona pontos a cada três dígitos
        setValue(`R$:${valorAlterado}`)
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setErrorDescription(false);
        setErrorValue(false);
        setErrorType(false);
        setErrorCategory(false);
        setErrorDate(false);
        setErrorPaymentMethod(false);

        if (description.trim() === "") {setErrorDescription(true);return;}
        if (value === "" || value.split(":")[1] == "") {setErrorType(true);return}
        if (type.trim() === "") {setErrorType(true);return;}
        if (category.trim() === "") {setErrorCategory(true);return;}
        if (date.trim() === "") {setErrorDate(true);return;}
        if (paymentMethod.trim() === "") {setErrorPaymentMethod(true);return;}

        try {
            onCreateTransaction({
                description,
                value,
                type,
                category,
                date,
                paymentMethod
            });
            setDescription("");
            setValue("");
            setType("");
            setCategory("");
            setDate("");
            setPaymentMethod("");

            setOpen(false);
            reloadTransactions();
        } catch (error) {
        console.log(error);
        }


    }

    return (
        <Container>
            <FormWrapper onSubmit={(e)=>{handleSubmit(e)}} >
                <Title>Nova Transação</Title>
                <BoxInput>
                    <Label>Descrição</Label>
                    <Input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <ErrorMessage style={{ color: errorDescription ? 'red' : 'transparent' }}>Descrição inválida</ErrorMessage>
                </BoxInput>
                <BoxInputDouble>
                    <BoxInputSmall>
                        <Label>Valor</Label>
                        <Input type="text" name="value" placeholder='R$:0,00' value={value} onChange={(e) => setMask(e.target.value)} />
                        <ErrorMessage style={{ color: errorValue ? 'red' : 'transparent' }}>Valor inválido</ErrorMessage>
                    </BoxInputSmall>
                    <BoxInputSmall>
                        <Label>Tipo</Label>
                        <Select name="type" value={type} onChange={(e) => setType(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="ganho">Receita</option>
                            <option value="despesa">Despesa</option>
                        </Select>
                        <ErrorMessage style={{ color: errorType ? 'red' : 'transparent' }}>Tipo inválido</ErrorMessage>
                    </BoxInputSmall>
                </BoxInputDouble>

                <BoxInput>
                    <Label>Categoria</Label>
                    <Select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Selecione</option>
                        <option value="alimentacao">Alimentação</option>
                        <option value="transporte">Transporte</option>
                        <option value="saude">Saúde</option>
                        <option value="lazer">Lazer</option>
                        <option value="moradia">Moradia</option>
                        <option value="educacao">Educação</option>
                        <option value="outros">Outros</option>
                    </Select>
                    <ErrorMessage style={{ color: errorCategory ? 'red' : 'transparent' }}>Categoria inválida</ErrorMessage>
                </BoxInput>
                <BoxInputDouble>
                    <BoxInputSmall>
                        <Label>Data</Label>
                        <Input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <ErrorMessage style={{ color: errorDate ? 'red' : 'transparent' }}>Data inválida</ErrorMessage>
                    </BoxInputSmall>
                    <BoxInputSmall>
                        <Label>Forma de Pagamento</Label>
                        <Select name="paymentMethod" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                            <option value="">Selecione</option>
                            <option value="dinheiro">Dinheiro</option>
                            <option value="pix">Pix</option>
                            <option value="cartao-credito">Cartão de Crédito</option>
                            <option value="cartao-debito">Cartão de Débito</option>
                        </Select>
                        <ErrorMessage style={{ color: errorPaymentMethod ? 'red' : 'transparent' }}>Forma de Pagamento inválida</ErrorMessage>
                    </BoxInputSmall>
                </BoxInputDouble>
                <ButtonsForm>
                    <ButtonCreate type="submit">Salvar</ButtonCreate>
                    <ButtonClose type="button" onClick={() => setOpen(false)}>Fechar</ButtonClose>
                </ButtonsForm>
            </FormWrapper>
        </Container>
    );
}
export default FormTransaction;


