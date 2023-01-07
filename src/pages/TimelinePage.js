import styled from "styled-components"
import Header from "../components/Header";
import Posts from "../components/Posts";
import MkPosts from "../components/MkPosts";
import TrendingBox from "../components/TrendingBox";
import { useState,useEffect } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Timeline() {

    const [showPosts,setShowPosts] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/timeline`)
        promise.then(res => setShowPosts(res.data)&setLoading(false)
        )
        promise.catch(erro => console.log(erro)&alert('An error occured while trying to fetch the posts, please refresh the page')
        )

    }, [])
    console.log(showPosts.length)
    return(
    <Container>
        <Header/>
        <TimelineBody>
            <h1>timeline</h1>
            <TrendingBox/>
            <MkPosts/>
            {loading?<h3>Loading <AiOutlineLoading3Quarters /></h3>:showPosts.length===0?<h3>There are no posts yet</h3>: showPosts.map((e,i)=><Posts key={i} name={e.name} description={e.description} id={e.id} likeQtd={e.likeQtd} />)}
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
    align-items:center;
    width:100%;
    height:100vh;
    overflow-y: scroll;
    h3{
        font-size:50px;
        margin-top:30px;
    }
    h1{
        margin-top:80px;
        margin-bottom:40px;
        font-size: 43px;
        color:white;
    }
`

