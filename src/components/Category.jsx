import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export default function Category() {
  return (
    <List>
        <SLink to={'/group/vodka'}>
            
            <h4>Vodka</h4>
        </SLink>
        <SLink to={'/group/rum'}>
            
            <h4>Rum</h4>
        </SLink>
        <SLink to={'/group/gin'}>
            
            <h4>Gin</h4>
        </SLink>
        <SLink to={'/group/whiskey'}>
            
            <h4>Whiskey</h4>
        </SLink>
        <SLink to={'/group/tequila'}>
            
            <h4>Tequila</h4>
        </SLink>
    </ List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    text-decoration: none;
    border-radius: 50%;
    border: 2px solid gray;
    box-shadow: 0 0 1px #461596, 0 0 2px #461596, 0 0 6px #461596, 0 0 12px #461596, inset 0 0 1px #461596, inset 0 0 2px #461596, inset 0 0 6px #461596, inset 0 0 12px #461596;
    background: radial-gradient(circle,
        rgb(70, 21, 150, 1) 15%,
        rgb(11, 11, 58, 1) 100%); 
    width: 6rem;
    height: 3.5rem;
    cursor: pointer;
    transform: scale(0.8);
    transition: all ease-in-out 250ms;

    h4 {
        color: white;
        font-size: 0.8rem;
    }
    svg {
        color: white;
        font-size: 1.5rem;
    }
    &.active, &:hover {
        border: 2px solid white;
        box-shadow: 0 0 1px #d136a3, 0 0 2px #d136a3, 0 0 6px #d136a3, 0 0 12px #d136a3, inset 0 0 1px #d136a3, inset 0 0 2px #d136a3, inset 0 0 6px #d136a3, inset 0 0 12px #d136a3;
        background: radial-gradient(circle,
            rgb(230, 0, 115, 1) 15%,
            rgb(11, 11, 58, 1) 100%);
    }
`;