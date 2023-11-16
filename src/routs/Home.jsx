import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import {motion} from "framer-motion";
import {IoIosArrowDown} from 'react-icons/io'

import Search from '../components/Search';
import Random from '../components/Random';

export default function Home() {

  return (
    <motion.div
        animate = {{ opacity: 1}}
        initial = {{ opacity: 0 }}
        exit = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
    >
      <Container >
        <Content style={{backgroundImage: `url("images/cocktails-8.jpg")`}}>
          <Title>The Cocktail App</Title>
          <h3>Find a cocktail</h3>
          <Search />
          <a href="#content-2" className='icon-wrapper'>
            <IoIosArrowDown/>
          </a>
          <Gradient/>
          <Gradient2/>
        </Content>
        <Content id="content-2">
          <Random />
        </Content>
      </Container>
    </motion.div>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const Content = styled.div` 
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
  width: 100%;
  min-height: calc(100vh - 150px);
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  text-shadow: 0 0 5px #fff, 0 0 1px #fff, 0 0 2px #e60073, 0 0 3px #e60073, 0 0 4px #e60073, 0 0 5px #e60073, 0 0 6px #e60073;
  /* rgb(230, 0, 115) */

  @media only screen and (max-height: 650px), (max-width: 768px) {
   
  }

  h3 {
    text-shadow: none;
  }

  .icon-wrapper{
      position: absolute;
      font-size: 100px;
      bottom: 0;
      z-index: 3;
      cursor: pointer;
      animation: MoveUpDown 1.5s linear infinite;

      @media (max-height: 745px) {
        display: none;
      }
    }

    @keyframes MoveUpDown {
     100% {
        bottom: 0;
      }
      50% {
        bottom: 10px;
      }
    }
`;

const glow = keyframes`
  from {
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 25px #e60073, 0 0 30px #e60073, 0 0 35px #e60073;
  }
  to {
    text-shadow: 0 0 15px #fff, 0 0 20px #ff4da6, 0 0 25px #ff4da6, 0 0 30px #ff4da6, 0 0 35px #ff4da6, 0 0 40px #ff4da6, 0 0 45px #ff4da6;
  }
`
const Title = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 3rem;
  animation: ${glow} 1s ease-in-out infinite alternate;
  margin: 35px 0 100px 0;
`

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to right, rgb(11, 11, 58), transparent, rgb(11, 11, 58)), linear-gradient(to bottom, rgb(11, 11, 58), transparent, rgb(11, 11, 58));
  opacity: 1;
  z-index: -1;
`
const Gradient2 = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(11, 11, 58);
  opacity: 0.2;
  z-index: -2;
`
