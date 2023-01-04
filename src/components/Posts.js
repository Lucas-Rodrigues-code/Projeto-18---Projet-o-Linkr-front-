import styled from "styled-components"
import { AiOutlineHeart } from 'react-icons/ai';
export default function Posts() {

    return(
        <Post>
        <header><img src="https://http.cat/200" alt="https://http.cat/200"/>username</header>
        <nav><AiOutlineHeart size={'25px'}/></nav>
        <main>
            <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</p>
        </main>
        </Post>
    )
}

const Post = styled.div`
        width:610px;
        min-height:276px;
        background-color:#171717;
        border-radius: 16px;
        display: grid;
        color:#FFFFFF;
        margin-top: 20px;
    height: 200px;
    
    grid-template:
        [header-left] "head head" 55px [header-right]
        [main-left] "nav  main" 1fr [main-right]
        / 120px 1fr;

    header {
    grid-area: head;
    display:flex;
    align-items:center;
    border-radius: 16px;
    }

    nav {
    grid-area: nav;
    border-radius: 16px;
    width:80px;
    display:flex;
   justify-content:center;
    }

    main {
    grid-area: main;
    border-radius: 16px;
    position:relative;
    form{
        display:flex;
        flex-direction:column;
    }
    button{
        height:31px;
        width:112px;
        background: #1877F2;
        border-radius: 5px;
        color:#FFFFFF;
        position:absolute;
        right:10px;
        bottom:10px;
        box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    }
    }

    img{
        width:45px;
        height:45px;
        border-radius: 26px;
        margin-left:20px;
        margin-right:43px;
    }
`