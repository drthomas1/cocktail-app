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
              {/* <Logo to={"/"}> The Cocktail App </Logo> */}
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

  @media screen and (max-width: 795px) {
        }
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
  svg {
    /* filter: drop-shadow(3px 3px 3px rgb(230 0 115/ 1)); */
    
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
`
// const Logo = styled(Link)`
//   text-decoration: none;
//   margin-left: 15px;
//   text-transform: capitalize;
//   font-family: 'Lobster Two', cursive;
// `

export default App;
