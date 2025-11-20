
import { useState } from 'react';
import { SelectButton } from '../../components/selectButton';
import {} from './style';

export default function Dashboard() {
  const [type,setType] = useState<string>("")
  const [typeError,setTypeError] = useState<boolean>(false)
  return (
    <>
      <h1>Dashboard</h1> 
    <SelectButton 
      listOption={["jhonatan","jhenifer","mae"]} 
      selectData={type} 
      setSelectData={setType} 
      selectError={typeError}  
    />
    </>
        

  )
}
