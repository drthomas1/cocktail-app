import {Link, BrowserRouter} from 'react-router-dom';

import styled from 'styled-components';
import { FaCocktail } from "react-icons/fa";

import Category from './components/Category';
import Routs from "./routs/Routs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Top>
          <Nav>
            <Box to={"/"}>
                <FaCocktail/>
            </Box>
          </Nav>
          <Category />
        </Top>
        <Routs />
      </BrowserRouter>
    </div>
  );
}

const Top = styled.div`
  position: relative;
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
  color: #d136a3;
`

const Nav = styled.div`
  position: absolute;
  left: 0;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #e60073, 0 0 20px #e60073, 0 0 25px #e60073, 0 0 30px #e60073, 0 0 35px #e60073;

  @media (max-width: 525px) {
    font-size: 1.2rem;
  }
`
const Box = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
width: 4rem;
height: 4rem;
border-radius: 50%;
border: 2px solid white;
box-shadow: 0 0 1px #d136a3, 0 0 2px #d136a3, 0 0 6px #d136a3, 0 0 12px #d136a3, inset 0 0 1px #d136a3, inset 0 0 2px #d136a3, inset 0 0 6px #d136a3, inset 0 0 12px #d136a3;
background: radial-gradient(circle,
      rgb(230, 0, 115, 1) 15%,
      rgb(11, 11, 58, 1) 100%);

      @media (max-width: 525px) {
        width: 3rem;
        height: 3rem;
      }
`

export default App;
