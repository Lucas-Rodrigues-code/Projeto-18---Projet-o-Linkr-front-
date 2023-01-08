import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function EachHashtag(props) {
    const navigate = useNavigate()
    const { index, trend } = props;
    
    function hashtagNavigation(hashtag) {

        const newHashtag = hashtag.replace("#", "")
        navigate(`/trends/${newHashtag}`)
    }

    return (
            <Hashtag onClick={()=>hashtagNavigation(trend)} key={index}>{trend}</Hashtag>
    )
}

const Hashtag = styled.p`   
        color: #FFFFFF;
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 700;
        margin-bottom: 13px;
        margin-left: 2px;
`