import styled from "styled-components"
import Header from "../components/Header";
import Posts from "../components/Posts";
import MkPosts from "../components/MkPosts";
import TrendingBox from "../components/TrendingBox";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AuthContext } from "../contexts/Auth.js";
import UpdateButton from "../components/UpdateButton.js";
import useInterval from "use-interval";

export default function Timeline() {

    const [showPosts, setShowPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [resetPage, setResetPage] = useState(0)
    const [numberOfPosts, setNumberOfPosts] = useState(0)
    const [difference, setDifference] = useState(0)
    //console.log(`numberOfPosts:${numberOfPosts}`)
    //console.log(`difference global ${difference}`)
    
    useEffect(() => {
        console.log(`reset global ${resetPage}`)
        const promise = axios.get(`https://linkr-api-jt7z.onrender.com/timeline`)
        promise.then(res => {
            setShowPosts(res.data);
            setLoading(false)
        }
        )
        promise.catch(erro => console.log(erro) & alert('An error occured while trying to fetch the posts, please refresh the page')
        )

        console.log(`numberOfPosts: ${numberOfPosts}`)
        const promise2 = axios.get(`https://linkr-api-jt7z.onrender.com/total`)
        promise2.then(res => {
            setNumberOfPosts(res.data.count)
        }
        )
        promise.catch(erro => console.log(erro) & alert('An error occured while trying to fetch the posts, please refresh the page')
        )


    }, [resetPage])

    useInterval(() => {
        console.log('update')
        //console.log(`numberOfPosts: ${numberOfPosts}`)
        const promise = axios.get(`https://linkr-api-jt7z.onrender.com/total`)
        promise.then(res => {
           // console.log(`total: ${res.data.count}`);
            const difference = res.data.count - numberOfPosts
           // console.log(`difference ${difference}`)

            if (difference > 0) {
                
                setDifference(difference)
            }

        }
        )
        promise.catch(erro => console.log(erro) & alert('An error occured while trying to fetch the posts, please refresh the page')
        )

        

    }, 5000)

    return (
        <Container>
            <Header />
            <TimelineBody>
                <h1>timeline</h1>
                <TrendingBox />
                <MkPosts setResetPage={setResetPage} resetPage={resetPage} numberOfPosts={numberOfPosts} setNumberOfPosts={setNumberOfPosts} />
                <InnerContainer>
                    {difference > 0 && <UpdateButton  setResetPage = {setResetPage} resetPage = {resetPage} difference={difference} setDifference={setDifference} /> }
                    
                    {loading ? <h3>Loading <AiOutlineLoading3Quarters /></h3> : showPosts.length === 0 ? <h3>There are no posts yet</h3> : showPosts.map((e, i) => <Posts key={i} postId={e.postId} setResetPage={setResetPage} resetPage={resetPage} likeQtd={e.likeQtd} usersPhoto={e.usersPhoto} link={e.link} title={e.title}
                        imageUrl={e.imageUrl} imageDescription={e.imageDescription} userId={e.userId} name={e.name} description={e.description} />)}
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

