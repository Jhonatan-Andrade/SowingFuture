import  api  from "./config";
export interface TransactionData {
  description: string;
  value: number;
  type: string;
  category: string;
  date: string;
  paymentMethod: string;
}
export interface Transaction {
  id: string;
  description: string;
  value: number;
  type: string;
  category: string;
  date: string;
  paymentMethod: string;
}
export const fetchTransactions = async ():Promise<Transaction[]> => {
  try {
    const response = await api.get("/transaction");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    throw error;
  }
};
export const createTransaction = async (transactionData:TransactionData) => {
  try {
    const response = await api.post("/transaction", transactionData);
    return response.data;
  } catch (error) {
    console.error("Failed to create transaction:", error);
    throw error;
  }
};
export const deleteTransaction = async (transactionId: string) => {
  try {
    const response = await api.delete(`/transaction`, { data: { id: transactionId } });
    return response.data;
  } catch (error) {
    console.error("Failed to delete transaction:", error);
    throw error;
  }
};