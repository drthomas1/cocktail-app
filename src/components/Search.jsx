import React from 'react'
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <FormStyle>
        <div>
            <FaSearch />
            <input 
                type="text" 
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
