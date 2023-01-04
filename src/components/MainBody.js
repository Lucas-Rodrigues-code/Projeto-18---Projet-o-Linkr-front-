import styled from "styled-components";

export default function MainBody() {



    return (
        <BackgroundBody></BackgroundBody>
    )
}

const BackgroundBody = styled.main`
    background-color: #E5E5E5;
    display: flex;
    width: 100%;
    height: 100vh;
    h1 {
        color: #FFFFFF;
        font-family: 'Passion One', cursive;
        font-size: 40px;
    }
`