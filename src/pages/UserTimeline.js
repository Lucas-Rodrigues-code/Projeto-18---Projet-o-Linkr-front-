import styled from "styled-components"
import Header from "../components/Header";
import Posts from "../components/Posts";
import MkPosts from "../components/MkPosts";
import TrendingBox from "../components/TrendingBox";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { AuthContext } from "../contexts/Auth.js";
import { useParams } from "react-router-dom";

export default function UserTimeline() {
    const { login } = useContext(AuthContext)
    const { id } = useParams()
    const [showPosts, setShowPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [resetPage, setResetPage] = useState(0)
    const [isfollow, setIsFollow] = useState(true)
    const [on, onSet] = useState(false)
    useEffect(() => {
        const promise = axios.get(`https://linkr-api-jt7z.onrender.com/timeline/${id}`)
        promise.then(res => setShowPosts(res.data) & setLoading(false)
        )
        promise.catch(erro => console.log(erro) & alert('An error occured while trying to fetch the posts, please refresh the page')
        )

    }, [resetPage])

    useEffect(() => {  
        const config = {
            headers: {
    
                "Authorization": `Bearer ${login?.token}`
            }
        }
        const promise = axios.get(`https://linkr-api-jt7z.onrender.com/follow/${id}`,config)
            .then((res) => {
                console.log(res.data)
                setIsFollow(res.data);
                
            })
            .catch((err) => console.log(err))
    },[]);
    console.log(login?.token)
    function follow(){
        const config = {
            headers: {
    
                "Authorization": `Bearer ${login?.token}`
            }
        }
    
        const promise = axios.post(`https://linkr-api-jt7z.onrender.com/follow/${id}`,{},config)
        promise.then(res =>  setIsFollow(true) ,console.log("deu boa")
        )
        promise.catch(erro => alert(erro.response.data) 
        )

    }
    function unfollow(){
        const config = {
            headers: {
    
                "Authorization": `Bearer ${login?.token}`
            }
        }
    
        const promise = axios.delete(`https://linkr-api-jt7z.onrender.com/follow/${id}`,config)
        promise.then(res => setIsFollow(false) 
        )
        promise.catch(erro => alert(erro.response.data) 
        )

    }
    return (
        <Container>
            <Header />
            <TimelineBody>
                <ContButton>
                    <h1>{showPosts[0]?.name}'s posts</h1> 
                    {isfollow === false? <FollowButton onClick={follow} disabled={on}>Follow</FollowButton>:
                    <UnfollowButton onClick={unfollow} disabled={on}>Unfollow</UnfollowButton>}
                    
                </ContButton>
                <TrendingBox />
                <InnerContainer>
                    {loading ? <h3>Loading <AiOutlineLoading3Quarters /></h3> : showPosts.length === 0 ? <h3>There are no posts yet</h3> : showPosts.map((e, i) => <Posts key={i} usersPhoto={e.usersPhoto} link={e.link} title={e.title}
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
const ContButton = styled.div`
    height:300px;
    display:flex;
    justify-content:center;
    align-items:center;
   
    h1{
        padding-right:200px;
    }

    
`
const FollowButton = styled.button`
    margin-top:70px;
    width: 112px;
    height: 31px;
    
    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #1877F2;


`
const UnfollowButton = styled.button`
    width: 112px;
    height: 31px;
    
    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #1877F2;


`

