import styled from "styled-components";
import { AiOutlineDown } from "react-icons/ai"
export default function Header() {



    return (
        <HeaderBox>
            <p >linkr</p>
            <RightBox>
                <AiOutlineDown size="18px" color = "#FFFFFF" />
                <UserIcon></UserIcon>
        </RightBox>
        </HeaderBox>
    )
}

const HeaderBox = styled.header`
    box-sizing: border-box;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 10px 15px 10px 25px;
    width: 100%;
    
    p {
        color: #FFFFFF;
        font-family: 'Passion One', cursive;
        font-size: 50px;
    }
`
const RightBox = styled.div`
height: 60px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`
const UserIcon = styled.div`
    height: 53px;
    width: 53px;
    border-radius: 25px;
    border: 1px solid black;
    margin-left: 15px;
`