import styled from "styled-components"
import { useState } from "react"
import axios from "axios"
import { AuthContext } from "../contexts/Auth"
import { useContext } from "react"
import TrendingBox from "./TrendingBox"
import { ReactTagify } from "react-tagify";
export default function MkPosts({ setResetPage }) {
    const { token } = useContext(AuthContext)
    const [buttonOff, setButtonOff] = useState(false)
    const [postLink, setPostLink] = useState(
        {
            link: "",
            description: "",
        }
    )

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    async function insertTrends(string) {
        console.log("entro na função")
        const trendArray = string.match(/#\w+/g)
        trendArray.forEach(hashtag => {
            console.log(`inserindo ${hashtag}`)
            axios.post("https://linkr-api-jt7z.onrender.com/trends", { trend: hashtag })
                .then(
                    res => {
                        console.log(res)
                        console.log(`inseriu ${hashtag}`)
                    })
                .catch(err => console.log(err))
            console.log(`terminou`)
        })
    }


    function publishPost(event) {
        event.preventDefault()
        setButtonOff(true)
        console.log(postLink)
        console.log('TOKEN ENVIADO',config.headers)
        const promise = axios.post("https://linkr-api-jt7z.onrender.com/timeline", postLink, config)
        
        promise.then((res) => {         
            
            insertTrends(postLink.description)

            setPostLink(
                {
                    link: "",
                    description: "",
                }
            )
            setResetPage(true)
            setButtonOff(false)
        })
        promise.catch((err) => alert("Houve um erro ao publicar o seu link") & setButtonOff(false))
    }
    return (
        <MKpost>
            <header><img src="https://http.cat/200" alt="https://http.cat/200" />What are you going to share today?</header>
            <TrendingBox/>
            <nav></nav>
            <main>
                <form onSubmit={publishPost}>
                    <MyInput disabled={buttonOff} height={'20px'} placeholder="http://..." onChange={e => setPostLink(e2 => ({ ...e2, link: e.target.value }))} value={postLink.link} type="url" required />
                    <MyInput disabled={buttonOff} height={'60px'} placeholder="Awesome article about #javascript" onChange={e => setPostLink(e2 => ({ ...e2, description: e.target.value }))} value={postLink.description} type="text" />
                    <button disabled={buttonOff} type="submit">{buttonOff === false ? "Publish" : "Publishing..."}</button>
                </form>
            </main>
        </MKpost>
    )
}

const MKpost = styled.div`
    background-color:#FFFFFF;
    width:610px;
    min-height:210px;
    border-radius: 16px;
    display: grid;
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

    @media (max-width: 527px ) {
        width: 100vw;
        border-radius: 0;
       }
    `

const MyInput = styled.input`
border-radius: 5px;
background-color:#EFEFEF;
width:90%;
height:${props => props.height};
margin-bottom:10px;
box-shadow: 0 0 0 0;
border: 0 none;
outline: 0;

`