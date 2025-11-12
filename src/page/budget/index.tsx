
import { useEffect, useState } from 'react';
import AddButton from '../../components/addButton';
import { AccountingRecordItemLi, AccountingRecordItemLiSpan, BoxList, BoxListTitle, Container, Header, HeaderForm, HeaderTitle, Input, InputMoney, List, Main, Select, SubTitle, Title } from './style';
import { createAccountingRecord, deleteAccountingRecord, fetchAccountingRecords, type AccountingRecord, type AccountingRecordData } from '../../api/accountingRecord';
import EmptyListMessage from '../../components/emptyListMessage';


function AccountingRecordItem({data,onDeleteAccountingRecord}: {data: AccountingRecord, onDeleteAccountingRecord: () => void}) {
  return (
    <AccountingRecordItemLi>
      <AccountingRecordItemLiSpan>{data.title}</AccountingRecordItemLiSpan>
      <AccountingRecordItemLiSpan>R$ : {data.value}</AccountingRecordItemLiSpan>
      <button 
        style={{
          border:"none",
          borderRadius:"4px", 
          width:"20px",
          height:"20px",
          backgroundColor:"rgba(255, 255, 255, 0.1)"
        }} 
        type="button" 
        onClick={()=>onDeleteAccountingRecord()}
      >X</button>
    </AccountingRecordItemLi>
  )
}


export default function AccountingRecord() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [valueError, setValueError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const [accountingRecordsEarn, setAccountingRecordsEarn] = useState<AccountingRecord[]>([]);
  const [accountingRecordsExpense, setAccountingRecordsExpense] = useState<AccountingRecord[]>([]);

  function setMask(valor:string) {
    var valorAlterado = valor
    valorAlterado = valorAlterado.replace(/\D/g, ""); // Remove todos os não dígitos
    valorAlterado = valorAlterado.replace(/(\d+)(\d{2})$/, "$1,$2"); // Adiciona a parte de centavos
    valorAlterado = valorAlterado.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."); // Adiciona pontos a cada três dígitos
    setValue(`R$:${valorAlterado}`)
  }

  async function onCreateAccountingRecord() {
    setTitleError(false)
    setValueError(false)
    setTypeError(false)

    if (title == "") {setTitleError(true);return}
    if (value === "" || value.split(":")[1] == "") {setValueError(true);return}
    if (type === "") {setTypeError(true);return}

    try {
      const newAccountingRecord = {title,value,type};
      const response = await createAccountingRecord(newAccountingRecord);

      if (response.type === "ganho") setAccountingRecordsEarn(prev => [...prev, response]);
      if (response.type === "despesa") setAccountingRecordsExpense(prev => [...prev, response]);

      setTitle('');
      setValue('');
      setType('');

    } catch (error) {
      console.error("Error creating accounting record:", error);
    }
  }
  async function onSearchAccountingRecords() {
    try {
      const response = await fetchAccountingRecords();

      const ganhos = response.filter(item => item.type === "ganho");
      const despesas = response.filter(item => item.type === "despesa");

      setAccountingRecordsEarn(ganhos);
      setAccountingRecordsExpense(despesas);
    } catch (error) {
      console.error("Error fetching accounting records:", error);
    }
  }
  async function onDeleteAccountingRecord(id: string) {
    try {
      await deleteAccountingRecord(id);
      setAccountingRecordsEarn((prev) => prev.filter((item) => item.id !== id));
      setAccountingRecordsExpense((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting accounting record:", error);
    }
  }
  useEffect(() => {
    onSearchAccountingRecords();
  }, []);
  return (
    <Main>
      <Header>
        <HeaderTitle>
          <Title>Registro Contábil</Title>
          <SubTitle>Gerencie suas receitas e despesas</SubTitle>
        </HeaderTitle>
        <HeaderForm>
          <Input 
            style={{borderColor:`${titleError ? 'red' : 'transparent'}`}} 
            type='text' 
            placeholder='Título' 
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
          />
          <InputMoney 
            style={{borderColor:`${valueError ? 'red' : 'transparent'}`}}  
            type='text' placeholder='R$:0,00' 
            value={value} 
            onChange={(e)=>setMask(e.target.value)} 
          />
          <Select 
            style={{borderColor:`${typeError ? 'red' : 'transparent'}`}} 
            value={type}  
            onChange={(e)=>setType(e.target.value)}
          >
            <option value="">Tipo</option>
            <option value="ganho">Receita</option>
            <option value="despesa">Despesa</option>
          </Select>
          <AddButton onClick={() => onCreateAccountingRecord()} />
        </HeaderForm>
        {accountingRecordsEarn.length !== 0 || accountingRecordsExpense.length !== 0 ?      
          <Container>
            <BoxList>
            {accountingRecordsEarn.length !== 0 && <BoxListTitle>Ganho</BoxListTitle>}
              <List>
                {accountingRecordsEarn.map((item) => (
                  <AccountingRecordItem 
                    key={item.id} 
                    data={item} 
                    onDeleteAccountingRecord={() => onDeleteAccountingRecord(item.id)}
                  />
                ))}
              </List>
            </BoxList>
            <BoxList>
            {accountingRecordsExpense.length !== 0  && <BoxListTitle>Despesas</BoxListTitle>}
              <List>
                {accountingRecordsExpense.map((item) => (
                  <AccountingRecordItem 
                    key={item.id} 
                    data={item} 
                    onDeleteAccountingRecord={() => onDeleteAccountingRecord(item.id)} 
                  />
                ))}  
              </List> 
            </BoxList>
          </Container>:
          <EmptyListMessage title='Nenhuma registro' subTitle='Crie seu registro mensal em minutos!' />}
      </Header>
    </Main>
  )
}