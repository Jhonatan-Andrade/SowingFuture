
import { useEffect, useState } from 'react';
import {ButtonCreateTransaction, ButtonFilter, Container, FilterValue, Header, HeaderFilter, HeaderTitle, Main, Select, SubTitle, Title,TransactionItemLi, TransactionItemLiHeader, TransactionItemLiSpan} from './style';
import { createTransaction, deleteTransaction, fetchTransactions, type Transaction, type TransactionData } from '../../api/transactions';
import FormTransaction from '../../components/formTransaction';
import AddButton from '../../components/addButton';
import EmptyListMessage from '../../components/emptyListMessage';
import { SelectButton } from '../../components/selectButton';



function TransactionItem({data,onDeleteTransaction}: {data: Transaction, onDeleteTransaction: () => void}) {
  return (
    <TransactionItemLi>
      <TransactionItemLiSpan>{data.description}</TransactionItemLiSpan>
      <TransactionItemLiSpan>{data.value}</TransactionItemLiSpan>
      <TransactionItemLiSpan>{data.category}</TransactionItemLiSpan>
      <TransactionItemLiSpan>{data.date}</TransactionItemLiSpan>
      <TransactionItemLiSpan>{data.paymentMethod}</TransactionItemLiSpan>
      <TransactionItemLiSpan>{data.type}</TransactionItemLiSpan>
      <button style={{border:"none",borderRadius:"4px"}} type="button" onClick={()=>onDeleteTransaction()}>Excluir</button>
    </TransactionItemLi>
  )
}

export default function Transaction() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [filteredTransactionsType, setFilteredTransactionsType] = useState("");
  const [filteredTransactionsCategory, setFilteredTransactionsCategory] = useState("");

  const [openForm, setOpenForm] = useState(false);

   async function onCreateTransaction(data: TransactionData) {
    try {
      const response = await createTransaction(data);
      console.log(response);
      
      setTransactions(prev => [...prev, response]);
    } catch (error) {
      console.log(error);
    }
  };
  async function onSearchTransaction() {
    try {
      const response = await fetchTransactions();
      setTransactions(response);
    } catch (error) {
      console.log(error);
    }
  };
  async function onDeleteTransaction(id: string) {
    try {
      const data = await deleteTransaction(id);
      console.log(data.message);
      setTransactions(prev => prev.filter(transaction => transaction.id !== id));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    onSearchTransaction()
  }, []);
  return (
    <Main>
      <Header>
        <HeaderTitle>
          <Title>Transação</Title>
          <SubTitle>Gerencie suas receitas e despesas</SubTitle>
        </HeaderTitle>
        <HeaderFilter>
          <SelectButton 
            placeholde='Filtrar por Tipo'
            listOption={["receita","despesa"]} 
            selectData={filteredTransactionsType} 
            setSelectData={setFilteredTransactionsType} 
            width='100%'
          />
          <SelectButton 
            placeholde='Filtrar por Categoria'
            listOption={["alimentacao","tranporte","lazer","moradia","educacao","outros"]} 
            selectData={filteredTransactionsCategory} 
            setSelectData={setFilteredTransactionsCategory} 
            width='100%'
          />
          <ButtonFilter onClick={onSearchTransaction}>Filtrar</ButtonFilter>
          <FilterValue>{transactions.length} transações encontradas</FilterValue>
        </HeaderFilter>
        <AddButton style={{ position: "absolute", right: 0, top: "1.5rem" }} onClick={() => setOpenForm(true)} text="Nova Transação" />
      </Header>
      {transactions.length !== 0?<Container>
        <TransactionItemLiHeader>
          <TransactionItemLiSpan>Descrição</TransactionItemLiSpan>
          <TransactionItemLiSpan>Valor</TransactionItemLiSpan>
          <TransactionItemLiSpan>Categoria</TransactionItemLiSpan>
          <TransactionItemLiSpan>Data</TransactionItemLiSpan>
          <TransactionItemLiSpan>Pagamento</TransactionItemLiSpan>
          <TransactionItemLiSpan>Tipo</TransactionItemLiSpan>
        </TransactionItemLiHeader>
        {transactions.map((item) => (
          <TransactionItem key={item.id} data={item} onDeleteTransaction={() => onDeleteTransaction(item.id)} />
        ))}
        {transactions.length === 0 && (<p>Nenhuma transação encontrada</p>)}
      </Container>:
      <EmptyListMessage title='Nenhuma transação encontrada' subTitle='Comece criando sua primeira transação' />}
      {openForm && <FormTransaction  setOpen={setOpenForm} reloadTransactions={onSearchTransaction} onCreateTransaction={onCreateTransaction} />}
    </Main>
     
  )
}