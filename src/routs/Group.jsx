import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import {motion} from "framer-motion";
import { Link, useParams } from 'react-router-dom';

export default function Group() {

    const [drink, setDrink] = useState([]);
    let params = useParams();
  
    const getDrink = (name) => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
      .then(res => {
        console.log(res.data.drinks)
        setDrink(res.data.drinks.slice(0, 30))
      }).catch(err => {
        console.log(err)
      })
    }

    useEffect(() => {
        getDrink(params.type);
    }, [params.type]);
  
    const cocktail = drink.map(item => {
      return (
        <Card key={item.idDrink}>
            <Link to={'/cocktail/' + item.idDrink}>
              <h4>{item.strDrink}</h4>
              <img src={item.strDrinkThumb} alt="cocktail" />
            </Link>
       </Card> 
      )
    });

  return (
    <Grid
        animate = {{ opacity: 1}}
        initial = {{ opacity: 0 }}
        exit = {{ opacity: 0 }}
        transition = {{ duration: 0.5 }}
    >
        {cocktail}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
        border: 2px solid white;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;