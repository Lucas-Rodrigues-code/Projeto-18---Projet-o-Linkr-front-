import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";

import styled from 'styled-components';
export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    function handleForm(e) {
        e.preventDefault()
        axios.post(`/sign-in`, form)
            .then((res) => {
                console.log("deu boa")
            })
            .catch((err) => {
                alert(err.response.data)
            })
    }

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    return (
        <Container>
            <SideBar>
                <div>
                    <h1>linkr</h1>
                    <h2>save, share and discover<br />
                        the best links on the web</h2>
                </div>
            </SideBar>
            <Inputs>
                <form onSubmit={handleForm}>
                    <input placeholder='e-mail' type="email" name="email" value={form.email} onChange={handleChange} required />
                    <input placeholder='password' type="password" name="password" value={form.password} onChange={handleChange} required />
                    <button>Log In</button>
                </form>
                <Link to={"/sign-up"}>
                    <h1>First time? Create an account!</h1>
                </Link>
            </Inputs>
        </Container>
    )
}

const Container = styled.div`
    background-color:#151515;
    display:flex;
    justify-content:center;
    align-items:center;
    
    @media (max-width: 390px) {
        flex-direction:column;
    }
 `
const SideBar = styled.div` 
    height:100vh;
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
     h1{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;

        color: #FFFFFF;
    }
    h2{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        color: #FFFFFF;
        @media (max-width: 390px) {
            font-size: 23px;
    }
    }  
   
`
const Inputs = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color:#333333;
    height:100vh;
    width:600px;
    @media (max-width: 390px) {
        width:100%;
    }
    justify-content:center;
    align-items:center;
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
    }
    input{
        margin-top:10px;
        width: 299px;
        height: 53px;
        background: #FFFFFF;
        border-radius: 6px;

        ::placeholder{ 
            
            padding-left:14px;
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 27px;
            line-height: 40px;
            


            color: #9F9F9F;
        }
    }
    button{
        margin-top:10px;
        width:298px;
        height:52px;
    
        background: #1877F2;
        border-radius: 6px;

        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        line-height: 40px;



        color: #FFFFFF;
    }
    h1{
        margin-top:10px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px;
        

        text-decoration-line: underline;

        color: #FFFFFF;
    } 
    
 `