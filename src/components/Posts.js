import styled from "styled-components"
import { AiOutlineHeart } from 'react-icons/ai';
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import findHashtags from "find-hashtags";
export default function Posts(props) {

    const {name, description} = props

    const navigate = useNavigate()
    const tagStyle = {
        color: '#FFFFFF',
        fontWeight: 700,
    };

    function hashtagNavigation(hashtag) {
        const newHashtag = hashtag.replace("#", "")
        navigate(`/hashtag/${newHashtag}`)
    }

    return (
        <Post>
            <header><img src="https://http.cat/200" alt="https://http.cat/200" />{name}</header>
            <nav><AiOutlineHeart size={'25px'} /></nav>
            <main>
                <ReactTagify
                    tagStyle={tagStyle}
                    tagClicked={val => hashtagNavigation(val)}>
                    <p>{description===undefined?"":description}</p>
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