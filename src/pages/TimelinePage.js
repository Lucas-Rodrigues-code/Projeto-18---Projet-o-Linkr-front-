import styled from "styled-components"
import Header from "../components/Header";
import Posts from "../components/Posts";
import MkPosts from "../components/MkPosts";
import TrendingBox from "../components/TrendingBox";
export default function Timeline() {

    const showPosts = [
        {

    },
    {

    }]
    return(
    <Container>
        <Header/>
        <TimelineBody>
            <h1>timeline</h1>
            <TrendingBox/>
            <MkPosts/>
            {showPosts.map((e,i)=><Posts key={i}/>)}
            <Posts/>
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
    
    h1{
        margin-top:80px;
        margin-bottom:40px;
        font-size: 43px;
        color:white;
    }
`

