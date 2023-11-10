import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

export default function Searched() {
  
  const [searchedCocktails, setSearchedCocktails] = useState([]);
  let params = useParams();
  
    const getDrink = (name) => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => {
        console.log(res.data.drinks)
        const data = res.data.drinks;
        if (data){
          setSearchedCocktails(data)
        }
      }).catch(err => {
        console.log(err)
      })
    }

    useEffect(() => {
        getDrink(params.search);
    }, [params.search]);

    const searchResults = searchedCocktails.map((item) => {
      return (               
          <Card key={item.idDrink}>
              <Link to={'/cocktail/' + item.idDrink}>
                  <h4>{item.strDrink}</h4>
                  <img src={item.strDrinkThumb} alt="cocktail" />
              </Link>
          </Card>
      )
  });
    const searchEmpty = <h4>No Drink Found</h4>;

return (
  <Grid>
    {searchedCocktails.length > 0  ? searchResults : searchEmpty}
  </Grid>
)
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`;
const Card = styled.div`
    margin: auto;
    img {
        width: 100%;
        border-radius: 2rem;
        max-width: 500px;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;


