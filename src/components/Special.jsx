import { useEffect, useState } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import styled from "styled-components";
import '@splidejs/react-splide/css';
import { Intersection } from "@splidejs/splide-extension-intersection"
import axios from "axios";

export default function Special() {
const [drink, setDrink] = useState([]);

const getSpecial = () => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then(res => {
        console.log(res.data.drinks)
        setDrink(res.data.drinks.slice(0, 4))
    }).catch(err => {
        console.log(err)
    })
    }

    useEffect(()=> {
        getSpecial();
    },[]);

    const cocktail = drink.map(item => {
        return (
            <SplideSlide key={item.id}>
                <Card key={item.id}>
                    <img src={item.strDrinkThumb} alt="" />
                    <div>
                        <h1>{item.strDrink}</h1>
                        <p> text text</p>
                            <button>Learn More</button>   
                        
                  </div>
                </Card>
              </SplideSlide>
        )
      });

  return (
    <div>
        <Wrapper>
        <h3>What's Popular</h3>
        <Splide 
          options={ {
            perPage: 1,
            arrows: true,
            pagination: true,
            pauseOnHover: true,
            autoplay: true,
            rewind: true,
            type: "fade",
            interval: 5000,
            intersection: {
              inView: {
              autoplay: true,
              },
              },
            speed: 2000,
            drag: false,
            breakpoints: {
              992: {
                pagination: false,
              }
            }
          } } 
          extensions={{ Intersection }}
        >
          {cocktail}
        </Splide>
      </Wrapper>
    </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;

    h3{
      text-align: center;
    }
`;
const Card = styled.div`
  display: flex;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 992px) {
     flex-direction: column;
    }

  img{
    left: 0;
    width: 66.666666%;
    object-fit: cover;

    @media screen and (max-width: 992px) {
     height: 50%;
     width: 100%;
    }
  }
  div{
    width: 33.333333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(35deg, #494949, #313131);

    @media screen and (max-width: 992px) {
     height: 50%;
     width: 100%;
     padding: 2rem 0rem;
    }

    h3{
        color: white;
        text-align: center;
        padding: 0 0.5rem;
    }

    p{
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 25px;
        padding: 0 0.5rem;
    }
    button{
        padding: 8.5px 15px;
        border-radius: 7.5px;
        font-weight: bold;
        background: black;
        border: 2px solid white;
        color: white;

        :hover {
        background: linear-gradient(to right, #f27121, #e94057);
    }
    }

}
`;
