import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom';
import axios from "axios";

function Random() {
    const [drink, setDrink] = useState([]);
    let arr = [];

    function shuffleArray(array) {
      var copy = [].concat(array);
      copy.sort(function(){
        return 0.5 - Math.random();
      });
      arr = copy;
    }

    const getRandom = () => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
        .then(res => {
            console.log(res.data.drinks)
            let data = res.data.drinks
            shuffleArray(data)
            setDrink(arr.slice(0, 9))
        }).catch(err => {
            console.log(err)
        })
        }
    
        useEffect(()=> {
            getRandom();
        },[]);
  
  return (
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide 
          options={ {
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: '3rem',
            breakpoints: {
              1024: {
                perPage: 2,
                gap: '1rem'
              },
              480: {
                perPage: 1,
                gap: '1rem'
              }
            }
          } } 
        >
            {drink.map(item => {
                return (
                    <SplideSlide key={item.strDrinkThumb}>
                        <Card>
                            <Link to={'/cocktail/' + item.idDrink}>
                              <img src={item.strDrinkThumb} alt="" />
                              <p>{item.strDrink}</p> 
                              <Gradient />
                            </Link>
                        </Card>
                      </SplideSlide>
                      )
                    })}
          </Splide>
        </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
  width: 100%;
  text-align: center;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  border: 2px solid white;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Random