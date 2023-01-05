import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ReactTagify } from "react-tagify";
import { useEffect } from "react";
import axios from "axios";
export default function TrendingBox() {

    useEffect(() => {
        const promisse = axios.get("https://linkr-api-jt7z.onrender.com/trends")

        promisse.then(resp => {
            console.log(resp)
        })

        promisse.catch((erro) => {

            console.log(erro.response.data)
        })


    }, [])
    

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
        <ExternalBox>
            <TrendingHeader><h2>trending</h2></TrendingHeader>
            <HashtagBox>
                <ReactTagify
                    tagStyle={tagStyle}
                    tagClicked={val => hashtagNavigation(val)}>
                    <Hashtag>#javascript</Hashtag>
                </ReactTagify>
            </HashtagBox>
        </ExternalBox>
    )
}

const ExternalBox = styled.div`
    background-color: #171717;
    border-radius: 16px;
    height: 406px;
   right:10%;
    position: fixed;
    top: 241px;
    width: 300px;
    z-index: 1;
`
const TrendingHeader = styled.div`
    border-bottom: 1px solid #484848;
    height: 45px;
    margin-left: 10px;
    padding-top: 15px;
    width: 100%;
    
    h2 {
        color: #FFFFFF;
        font-family: 'Oswald', sans-serif;
        font-size: 27px;
        font-weight: 700;
    }
`

const HashtagBox = styled.div`
    margin-left: 10px;
    margin-top: 22px;
    
    h2 {
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 700;
    }
`

const Hashtag = styled.p`   
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 13px;
        margin-left: 2px;
`


