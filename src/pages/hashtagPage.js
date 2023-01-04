import Header from "../components/Header.js"
import styled from "styled-components"
import TrendingBox from "../components/TrendingBox.js"
export function HashTagPage() {
    return (
        <>
            <Header />
            <BackgroundBody>
                <TrendingBox/>
            </BackgroundBody>
        </>
    )
}

const BackgroundBody = styled.main`
    background-color: #E5E5E5;
    display: flex;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 0;
`