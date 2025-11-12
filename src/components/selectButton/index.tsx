import type { ComponentProps } from "react"
import { Select } from "./style";


interface SelectButtonProps extends ComponentProps<'select'> {
    typeError: boolean;
    type: string;
    setType: (value: string) => void;
    data: string[]; 
    width?:number
    height?:number

}
export  function SelectButton({typeError,type,setType,data,width,height}:SelectButtonProps){
    return(
        <Select 
          style={{
            borderColor:`${typeError ? 'red' : 'transparent'}`,
            width:`${width ? width : 10}rem`,
            height:`${height ? height : 2.5}rem`,
        }} 
          value={type}  
          onChange={(e)=>setType(e.target.value)}
        >
            <option value="">Tipo</option>
            {data.map((item, index) => (
                <option key={index} value={item}>{item.charAt(0).toUpperCase() + item.slice(1)}</option>
            ))}
        </Select>
    )
}
