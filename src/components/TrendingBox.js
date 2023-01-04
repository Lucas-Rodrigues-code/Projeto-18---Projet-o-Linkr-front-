import styled from "styled-components";

export default function TrendingBox() {
    return (
        <ExternalBox>
            <TrendingHeader><h2>trending</h2></TrendingHeader>
            <HashtagBox>
                <Hashtag># javascript</Hashtag>
                <Hashtag># react</Hashtag>
            </HashtagBox>
        </ExternalBox>
    )
}

const ExternalBox = styled.div`
    background-color: #171717;
    border-radius: 16px;
    height: 406px;
    left: 880px;
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
`


