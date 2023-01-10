import styled from "styled-components"
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts(props) {

    const { name, description, link, usersPhoto, imageUrl, imageDescription, title, userId, postId, likeQtd } = props
    const [heartColor, setheartColor] = useState(false)
    const navigate = useNavigate()
    const tagStyle = {
        color: '#FFFFFF',
        fontWeight: 700,
    };

    function hashtagNavigation(hashtag) {

        const newHashtag = hashtag.replace("#", "")
        navigate(`/trends/${newHashtag}`)
    }
    function usersPostNavigation(Id) {
        console.log(Id)
        navigate(`/user/${Id}`)
    }


    function goToUrl(){
        window.open(link)
    }

    function likeOrDislike() {

        setheartColor(!heartColor)
    }

    return (
        <Post>
            <header><img src={usersPhoto} alt={usersPhoto} /><h2 onClick={() => usersPostNavigation(userId)}>{name}</h2></header>
            <nav> {heartColor ?
                <AiFillHeart onClick={likeOrDislike} size={'25px'} color={'red'} /> :
                <AiOutlineHeart onClick={likeOrDislike} size={'25px'} color={'white'} />}

                <p>`{likeQtd} likes`</p>
            </nav>
            <main>
                <ReactTagify
                    tagStyle={tagStyle}
                    tagClicked={val => hashtagNavigation(val)}>
                    <p>{description === undefined ? "" : description}</p>
                </ReactTagify>

            </main>
            <LinkRedirect onClick={goToUrl}><div><h4>{title}</h4><h5>{imageDescription}</h5><a href={link} target="_blank" rel="noopener noreferrer">{link}</a></div><img src={imageUrl} alt={imageUrl} /></LinkRedirect>
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
        position:relative;
    height: 200px;
    grid-template:
        [header-left] "head head" 55px [header-right]
        [main-left] "nav  main" 1fr [main-right]
        / 120px 1fr;


            h2{
                font-size:25px;
            }

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
    justify-content:flex-start;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;

    p {
        color: #FFFFFF;
        font-size: 11px;
        font-weight: 400;
        font-family: 'Lato', sans-serif;
        margin-top: 5px;
        }
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
const LinkRedirect = styled.div`
    width:503px;
    height:155px;
    background-color:#171717;
    border: 1px solid #4D4D4D;
border-radius: 11px;
position:absolute;
right:10px;
bottom:10px;
display:flex;

       h4{
        color:#CECECE;
        font-size: 14px;
        font-weight: 100;
        margin-top:30px;
       }
       h5{
        font-size:12px;
            color:#9B9595;
            margin-top:10px;
       }
       a{
        font-size:10px;
        color:#CECECE;
        margin-top:40px;
       }
img{
    width: 150px;
    height:155px;
    margin-right: 0;
    border-radius: 0px 12px 13px 0px;
}
div{
    display:flex;
    flex-direction:column;
    height:100%;
    margin-left: 20px;
}
`