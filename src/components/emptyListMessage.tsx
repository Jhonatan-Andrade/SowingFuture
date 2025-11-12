import styled from "styled-components"


export default function EmptyListMessage({title,subTitle}:{title:string,subTitle:string}){
    return(
        <Container>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
        </Container>
    )
}
const Container = styled.div`
    width:100%;
    height:8rem;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
`
const Title = styled.div`
    width:100%;
    text-align:center;
    font-size: 16pt;
    font-weight: bold;
    color: ${props => props.theme.transparent };
`
const SubTitle = styled.div`
    width:100%;
    text-align:center;
    font-size: 12pt;
    color:${props => props.theme.transparent };
`