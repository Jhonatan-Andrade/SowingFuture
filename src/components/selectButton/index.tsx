import { useState } from "react"
import { OptionLI, Select, SelectButtonInput, SelectOption } from "./style";



function SelectOptionBox({data,width,setOption}:{
        data: string[],width?:string,setOption:(opt:string)=>any
    }) {
    return(
        <SelectOption >
            {data.map((i)=>{
                const opt = i.toLowerCase()
                return(
                    <OptionLI 
                        key={opt} 
                        onClick={()=>{
                            setOption(opt);
                        }}>{opt}
                    </OptionLI>
                )
            })}
        </SelectOption>
    )
}
interface SelectButtonProps {
    placeholde:string
    selectError?: boolean;
    selectData: string;
    setSelectData: (value: string) => void;
    listOption: string[]; 
    width?:string
    height?:string

}
export  function SelectButton({placeholde,selectError,selectData,setSelectData,listOption,width,height}:SelectButtonProps){
    const [optionOpenValue,setOptionOpen]=useState(false)
    function onSelectOption(opt:string) {
        setSelectData(opt);
        setOptionOpen(false);
    }
    return(
        <SelectButtonInput
            style={{
                borderColor:`${selectError && 'red'}`,
                width:`${width ? width : "10rem"}`,
                height:`${height ? height : "2.5rem"}`,   
            }}
        >
            <Select 
                onClick={()=>setOptionOpen(true)}
            >
                {selectData !== ""?selectData:listOption[0]}
            </Select>
            {optionOpenValue&&<SelectOptionBox 
                width={width}
                data={listOption} 
                setOption={(opt)=>{onSelectOption(opt)}}
            />}
        </SelectButtonInput>
    )
}
