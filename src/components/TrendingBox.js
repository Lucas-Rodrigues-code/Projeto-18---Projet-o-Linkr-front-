import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import EachHashtag from "./hashtag.js";

export default function TrendingBox() {
    const { token } = useContext(AuthContext)
    
    const [allTrends, setAllTrends] = useState([])
    

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get("https://linkr-api-jt7z.onrender.com/hashtag", config)

        promisse.then(resp => {
            setAllTrends(resp.data)
            
        })
        promisse.catch((erro) => {
            console.log(erro.response.data)
        })

    }, [])   

    if (allTrends.length !== 0) {
        return (
            <ExternalBox>
                <TrendingHeader><h2>trending</h2></TrendingHeader>
                <HashtagBox>
                    {allTrends.map((trend, index) => {
                        return (
                            <EachHashtag index={index} trend = {trend} />
                        )
                    })}
                </HashtagBox>
            </ExternalBox>
        )
    }
}

const ExternalBox = styled.div`
    display: block;
    background-color: #171717;
    border-radius: 16px;
    height: 406px;
    right:10%;
    position: fixed;
    top: 200px;
    width: 300px;
    z-index: 1;

    @media (max-width: 1282px) {
    display: none;
  }

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




