import styled from "styled-components"
export default function FollowButton() {
    return (
        <Cont>
            <h1>olaola</h1>
            <Button>follow</Button>
        </Cont>

    )
}
const Cont = styled.div`
display:flex;
align-items:center;
justify-content:center;

`
const Button = styled.button`
    width: 112px;
    height: 31px;
    
    background: #FFFFFF;
    border-radius: 5px;

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #1877F2;


`