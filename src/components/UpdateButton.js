import styled from "styled-components"
import { BiLoaderCircle } from "react-icons/bi"
export default function UpdateButton({ difference, setDifference,resetPage, setResetPage }) {

    function resetDifference() {
        setDifference(0)
        setResetPage(resetPage +1)
    }



    return (
        <ButtonForUpdate onClick={resetDifference}>
            <p>
                {difference} new posts, load more! <BiLoaderCircle size={'20px'} color={'white'} />
            </p>
        </ButtonForUpdate>
    )


}

const ButtonForUpdate = styled.button`
    width: 600px;
    height: 60px;
    background-color: #1877F2;
  
    display: /* ${props => props.difference > 0 ? 'flex' : 'none'} */ flex ;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 15px;
    box-shadow: 0 4px  rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    border: none;
    margin-left: auto;
    margin-right: auto;

    p{
        font-family: 'Lato', cursive;
        font-size: 16px;
        font-weight: 400;
        color: #FFFFFF;
    }



`