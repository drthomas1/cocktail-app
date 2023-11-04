import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

export default function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/searched/' + input);
    }
  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <FaSearch />
            <input 
                onChange = {(e) => setInput(e.target.value)}
                type="text" 
                value = {input}
            />
        </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 20%;

    @media screen and (max-width: 1024px) {
        margin: 0rem;
    }
    
    div {
        position: relative;
        width: 100%;
    }
    input {
        border: 4px solid white;
        box-shadow: 0 0 1px #d136a3, 0 0 2px #d136a3, 0 0 6px #d136a3, 0 0 12px #d136a3, inset 0 0 1px #d136a3, inset 0 0 2px #d136a3, inset 0 0 6px #d136a3, inset 0 0 12px #d136a3;
        background: linear-gradient(35deg, #494949, black);
        font-size: 1.5rem;
        color: pink;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 100%;

        @media screen and (max-width: 1024px) {
        font-size: 1rem;
        }
        
    }
    svg {
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`
