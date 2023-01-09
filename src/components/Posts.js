import styled from "styled-components";
import axios from "axios";
import findHashtags from "find-hashtags";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import { Popup } from "semantic-ui-react";


export default function Posts({ name, description, id, likeQtd, likedBy, token }) {
    const [likeNumber, setLikeNumber] = useState(likeQtd);
    const [liked, setLiked] = useState(false);
    const [user, setUser] = useState(0);
    let namesArray = [];
    let likesArray = [];
    const navigate = useNavigate()
    useEffect(() =>{
        console.log(likedBy)
        axios.get(`${BASE_URL}/likes`, {
            authorization: `Bearer ${token}`
        })
        .then((res) => {
            setUser(res.data[0].userId)
            likesArray = []
            console.log(id, likedBy)
            likedBy?.map((l) =>{
                console.log(l)
                likesArray.push(l)
                if (res.data[0].id === l.id){
                    setLiked(true)
                }
            })
            console.log(likesArray)
            showLikes()
        })
    }, [liked])

    function showLikes(){
        likesArray.reverse().map((a) =>{
            console.log(a.userId)
            if (a.userId === user){
                a.username = "você"
            }
            namesArray.push(a.username)
        })
        console.log(namesArray.toString())
    }

    const tagStyle = {
        color: '#FFFFFF',
        fontWeight: 700,
    };

    function hashtagNavigation(hashtag) {
        const newHashtag = hashtag.replace("#", "")
        navigate(`/hashtag/${newHashtag}`)
    }

    function likePost() {
        // axios.post(`${BASE_URL}/likes/${id}`, {
        //     headers:{
        //         authorization: `Bearer ${token}`
        //     }
        // })
        axios.post(`${BASE_URL}/likes/${id}`)
        .then((res) => {
            console.log(res.data)
            setLikeNumber(res.data.rows.length);
            setLiked(res.data.liked);
        })
        .catch((err) => console.log(err.response.data))
    }

    return (
        <Post>
            <header><Popup trigger={<img src="https://http.cat/200" alt="https://http.cat/200" />}
            content={"Olá"}
            >
                </Popup>{name}</header>
            {liked === false ? 
                <nav><Popup
                    trigger={<AiOutlineHeart size={'25px'} onClick={likePost} />}
                    content={{namesArray}}
                />
                <Popup.Content>{namesArray}</Popup.Content>
                <p>{likeNumber}</p></nav>
            :
            <nav><LikePost size={'25px'} onClick={likePost} /><p>{likeNumber}</p></nav>
        }
            <main>
                <ReactTagify
                    tagStyle={tagStyle}
                    tagClicked={val => hashtagNavigation(val)}>
                    <p>{description === undefined ? "" : description}</p>
                </ReactTagify>
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
        margin-bottom: 20px;
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
    flex-direction: column;
    align-items:center;
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
    /* @media (max-width: 527px ) {
        width: 100vw;
        border-radius: 0;
       } */
`

const LikePost = styled(AiFillHeart)`
    color: red;

`