import { useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import Header from "../components/Header.js"
import MkPosts from "../components/MkPosts.js";
import Posts from "../components/Posts.js";
import styled from "styled-components"
import TrendingBox from "../components/TrendingBox.js"
export function HashTagPage() {
    const { hashtag } = useParams()
    useEffect(() => {
        const promisse = axios.get(`https://linkr-api-jt7z.onrender.com/trends?hashtag=${hashtag}`)

        promisse.then(resp => {
            console.log(resp)
        })

        promisse.catch((erro) => {

            console.log(erro.response.data)
        })
},[])
    
    
    const showPosts = [{},{}]
    return (
        <Container>
            <Header />
            <TimelineBody>
                <h1>{hashtag}</h1>
                <TrendingBox />
                <MkPosts />
                {showPosts.map((e, i) => <Posts key={i} />)}
                <Posts />
            </TimelineBody>
        </Container>

    )
}


const Container = styled.div`
    background-color:#333333;
    height:100vh;
    font-family: 'Passion One', cursive;
`
const TimelineBody = styled.div`
    background-color:#333333;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:100%;
    height:100vh;
    overflow-y: scroll;
   /*  position: fixed;
    top: 232px;
    left: 241px; */
    h1{
        margin-top:80px;
        margin-bottom:40px;
        font-size: 43px;
        color:white;
    }
`

