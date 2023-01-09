import styled from "styled-components";
import { AiOutlineDown, AiOutlineArrowUp } from "react-icons/ai"
import { AuthContext } from "../contexts/Auth";
import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const { login, setLogin } = useContext(AuthContext);
    const [logaout, setlogaout] = useState(true)

    const navigate = useNavigate()
    
    function onLogaoutIcon() {
        setlogaout(false)
    }

    function offLogaoutIcon() {
        setlogaout(true)
    }

    function out() {
        navigate("/")
        window.location.reload()
        localStorage.removeItem("login")
    }


    return (
        <HeaderBox>
            <p >linkr</p>
            <RightBox>
                {logaout === true ? <AiOutlineDown size="18px" color="#FFFFFF" onClick={onLogaoutIcon} /> :
                    <AiOutlineArrowUp size="18px" color="#FFFFFF" onClick={offLogaoutIcon} />}
                {logaout === true ? <div></div> : <h1 onClick={out}>logaout</h1>}


                <UserIcon>
                    <img src={login?.imageUser} />
                </UserIcon>
            </RightBox>

        </HeaderBox>
    )
}

const HeaderBox = styled.header`
    position:fixed;
    top: 0;
    box-sizing: border-box;
    background-color: #151515;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 10px 15px 10px 25px;
    width: 100%;
    z-index: 1;
    
    p {
        color: #FFFFFF;
        font-family: 'Passion One', cursive;
        font-size: 50px;
        font-weight: 700;
    }
`
const RightBox = styled.div`
height: 60px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
    h1{
        color:white;
    }
`
const UserIcon = styled.div`
    height: 53px;
    width: 53px;
    border-radius: 25px;
    border: 1px solid black;
    margin-left: 15px;

    img{
        height: 53px;
        width: 53px;
        border-radius: 25px;
    }
`