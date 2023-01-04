import styled from "styled-components"
import { FiChevronDown } from "react-icons/fi";

export default function Timeline() {
    return(
    <Container>
        <Header>  <div>linkr</div>  <div> <FiChevronDown/>
<img src="https://http.cat/200" alt="https://http.cat/200"/></div> </Header>
    </Container>
    )
}

const Container = styled.div`
    background-color:#333333;
`
const Header = styled.div`
    background-color:#151515;
    width:100%;
    height:72px;
    color:#FFF;
    display:flex;
    align-items:center;
    justify-content:space-between;
    font-size:50px;
    font-weight:700;
    img{
        width:53px;
        height:53px;
        border-radius: 26px;
        margin-right:20px;
    }
    div{
        display:flex;
        align-items:center;
        justify-content:center;
        margin-left:20px;
    }
`