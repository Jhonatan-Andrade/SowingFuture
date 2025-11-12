import  api  from "./config";
export interface AccountingRecordData {
  title: string;
  value: string;
  type: string;
}
export interface AccountingRecord {
  id: string;
  title: string;
  value: string;
  type: string;
}
export const fetchAccountingRecords = async ():Promise<AccountingRecord[]> => {
  try {
    const response = await api.get("/accounting-records");
    return response.data
  } catch (error) {
    console.error("Failed to fetch accounting records:", error);
    throw error;
  }
};
export const createAccountingRecord = async (accountingRecordData: AccountingRecordData):Promise<AccountingRecord> => {

  try {
    const response = await api.post("/accounting-records", accountingRecordData);
    return response.data;
  } catch (error) {
    console.error("Failed to create accounting record:", error);
    throw error;
  }
};
export const deleteAccountingRecord = async (accountingRecordId: string) => {
  try {
    const response = await api.delete(`/accounting-records`, { data: { id: accountingRecordId } });
    return response.data;
  } catch (error) {
    console.error("Failed to delete accounting record:", error);
    throw error;
  }
};