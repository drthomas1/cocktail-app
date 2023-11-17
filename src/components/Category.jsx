import { useState } from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {LiaWineBottleSolid} from 'react-icons/lia';

export default function Category() {

    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Container>
        <List>
            <SLink to={'/group/i=vodka'}>
                
                <h4>Vodka</h4>
            </SLink>
            <SLink to={'/group/i=rum'}>
                
                <h4>Rum</h4>
            </SLink>
            <SLink to={'/group/i=gin'}>
                
                <h4>Gin</h4>
            </SLink>
            <SLink to={'/group/i=tequila'}>
                
                <h4>Tequila</h4>
            </SLink>
            <SLink to={'/group/a=Non_Alcoholic'}>
                
                <h4>Mocktail</h4>
            </SLink>
        </ List>
        <Hamburger onClick={() => setMenuOpen(!menuOpen)} className={(menuOpen && "active")}>
          <LiaWineBottleSolid />
        </Hamburger>
        <MobileMenu open={menuOpen}>
            <SLink to={'/group/i=vodka'} onClick={() => setMenuOpen(false)}>Vodka</SLink>
            <SLink to={'/group/i=rum'} onClick={() => setMenuOpen(false)}>Rum</SLink>
            <SLink to={'/group/i=gin'} onClick={() => setMenuOpen(false)}>Gin</SLink>
            <SLink to={'/group/i=tequila'}onClick={() => setMenuOpen(false)}>Tequila</SLink>
            <SLink to={'/group/a=Non_Alcoholic'} onClick={() => setMenuOpen(false)}>Mocktail</SLink>
        </MobileMenu>
    </Container>
  )
}

const Container = styled.div`
    z-index: 100;
`;

const List = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  text-align: center;
  color: white;
  border-radius: 1rem;
  display: none;
  flex-direction: column;
  /* gap: 1rem; */
  max-width: 150px;
  position: absolute;
  left:0;
  right:0;
  margin:5px auto;
  /* padding: 1rem; */
  background-color: rgb(11, 11, 58);
  border: 4px solid white;
  /* box-shadow: 0 0 1px #d136a3, 0 0 2px #d136a3, 0 0 6px #d136a3, 0 0 12px #d136a3, inset 0 0 1px #d136a3, inset 0 0 2px #d136a3, inset 0 0 6px #d136a3, inset 0 0 12px #d136a3; */
        
  div {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 2.5rem;
  height: 2%.5;
  padding: .5rem;
  border: 2px solid white;
  border-radius: 5px;
  box-shadow: 0 0 1px #d136a3, 0 0 2px #d136a3, 0 0 6px #d136a3, 0 0 12px #d136a3, inset 0 0 1px #d136a3, inset 0 0 2px #d136a3, inset 0 0 6px #d136a3, inset 0 0 12px #d136a3;
  background: radial-gradient(circle,
        rgb(230, 0, 115, 1) 15%,
        rgb(11, 11, 58, 1) 100%);
  cursor: pointer;

  svg {
    width: 100%;
    height: auto;
    color: white;
    
    /* transform-origin: left; */
    transition: all 1s ease;
  }

  @media (max-width: 768px) {
    display: flex;
  }

  &.active{
    svg{
      transform: rotate(90deg);
    }
  }
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

    @media (max-width: 768px) {
        border: none;
        background: none;
        box-shadow: none;
        border-radius: 0;
        width: 100%;
        height: 2.5rem;
  }
`;