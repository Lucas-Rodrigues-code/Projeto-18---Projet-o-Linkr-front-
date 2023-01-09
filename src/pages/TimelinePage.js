import styled from "styled-components"
import Header from "../components/Header";
import Posts from "../components/Posts";
import MkPosts from "../components/MkPosts";
import TrendingBox from "../components/TrendingBox";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AuthContext } from "../contexts/Auth.js";

export default function Timeline() {

    const [showPosts, setShowPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [resetPage, setResetPage] = useState(false)
    useEffect(() => {
        const promise = axios.get(`https://linkr-api-jt7z.onrender.com/timeline`)
        promise.then(res => setShowPosts(res.data) & setLoading(false) & console.log(res.data)
        )
        promise.catch(erro => console.log(erro) & alert('An error occured while trying to fetch the posts, please refresh the page')
        )

    }, [resetPage])

    return (
        <Container>
            <Header />
            <TimelineBody>
                <h1>timeline</h1>
                <TrendingBox />
                <MkPosts setResetPage={setResetPage} />
                <InnerContainer>
                    {loading ? <h3>Loading <AiOutlineLoading3Quarters /></h3> : showPosts.length === 0 ? <h3>There are no posts yet</h3> : showPosts.map((e, i) => <Posts key={i} userPhoto={e.userPhoto} link={e.link} title={e.title}
                    imageUrl={e.imageUrl} imageDescription={e.imageDescription}  name={e.name} description={e.description} />)}
                </InnerContainer>
            </TimelineBody>
        </Container>

    )
}

const InnerContainer = styled.div`

    overflow-y: auto;

`

const Container = styled.div`
    background-color:#333333;
    margin-top: 0;
    height:100vh;
    font-family: 'Passion One', cursive;

`
const TimelineBody = styled.div`
    background-color:#333333;
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin-left: 241px;
    margin-bottom: 5px;
    min-width: 100vw;
    height:100vh;
    overflow-y: scroll;
    h3{
        font-size:50px;
        margin-top:30px;
    }
    h1{
        margin-top:120px;
        margin-bottom:40px;
        font-size: 43px;
        color:white;
    }

    @media (max-width: 1282px) {
    display:flex;
    align-items: center;
    width: 100vw;
    margin-left: 0;
    margin-right: 0;
  }
`

