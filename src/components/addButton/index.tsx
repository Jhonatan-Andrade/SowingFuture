import styled from "styled-components"
import { blueGradient } from "../../theme"

export default function AddButton({style, onClick ,text}: { 
    style?: React.CSSProperties, 
    onClick: () => void , 
    text?: string 
}) {
    return (
        <Button onClick={onClick} style={style}>
            <Icon src="./icons/add.svg" alt={text} />
            {text && <Text>{text}</Text>}
        </Button>
    )
}
const Button = styled.button`
width:auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${blueGradient};
    padding: 4px 8px;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
`
const Icon = styled.img`
    width: 24px;
    height: 24px;
`
const Text = styled.span`
    font-size: 10pt;
    font-weight: bold;
    color: white;
`
