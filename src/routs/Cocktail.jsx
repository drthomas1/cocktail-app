import React from 'react'
import { useEffect, useState } from "react";
import styled from 'styled-components';
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('ingredients');

  const getCocktail = () => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.name}`)
    .then(res => {
        console.log(res.data.drinks)
        setDetails(res.data.drinks[0])
    }).catch(err => {
        console.log(err)
    })
    }

    useEffect(()=> {
        getCocktail();
    }, [params.name]);
  
  return (
    <DetailWrapper>
      <div>
        <h2>{details.strDrink}</h2>
        <img src = {details.strDrinkThumb} alt = "cocktail" />  
      </div>
      <Info>
        <div>
          <Button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </Button>
          <Button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </Button>
        </div>
        {activeTab === 'ingredients' &&(
          <ul>
            {details.strIngredient1 ? <li>{details.strIngredient1} <span>{details.strMeasure1}</span></li> : null }
            {details.strIngredient2 ? <li>{details.strIngredient2} <span>{details.strMeasure2}</span></li> : null }
            {details.strIngredient3 ? <li>{details.strIngredient3} <span>{details.strMeasure3}</span></li> : null }
            {details.strIngredient4 ? <li>{details.strIngredient4} <span>{details.strMeasure4}</span></li> : null }
            {details.strIngredient5 ? <li>{details.strIngredient5} <span>{details.strMeasure5}</span></li> : null }
            {details.strIngredient6 ? <li>{details.strIngredient6} <span>{details.strMeasure6}</span></li> : null }
            {details.strIngredient7 ? <li>{details.strIngredient7} <span>{details.strMeasure7}</span></li> : null }
            {details.strIngredient8 ? <li>{details.strIngredient8} <span>{details.strMeasure8}</span></li> : null }
            {details.strIngredient9 ? <li>{details.strIngredient9} <span>{details.strMeasure9}</span></li> : null }
            {details.strIngredient10 ? <li>{details.strIngredient10} <span>{details.strMeasure10}</span></li> : null }
            {details.strIngredient11 ? <li>{details.strIngredient11} <span>{details.strMeasure11}</span></li> : null }
            {details.strIngredient12 ? <li>{details.strIngredient12} <span>{details.strMeasure12}</span></li> : null }
            {details.strIngredient13 ? <li>{details.strIngredient13} <span>{details.strMeasure13}</span></li> : null }
            {details.strIngredient14 ? <li>{details.strIngredient14} <span>{details.strMeasure14}</span></li> : null }
            {details.strIngredient15 ? <li>{details.strIngredient15} <span>{details.strMeasure15}</span></li> : null }
            
        </ul>
        )}
        {activeTab === 'instructions' && (
          <div>
            <h4 dangerouslySetInnerHTML={{ __html: details.strInstructions }}></h4>
            <br />
            <h4>Serve: <span>{details.strGlass}</span></h4>
          </div>
        )}
      </Info>
    </DetailWrapper>
  )
}


const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        }
  .active{
    background-color: #d136a3;
    color: white;
    border: 2px solid white;
  }

  img{
    object-fit: cover;
    border-radius: 12.5%;
    border: 2px solid white;

    @media screen and (max-width: 1024px) {
        width: 100%;
        height: auto;
        }
  }

  h2{
    margin-bottom: 2rem;
    text-align: center;
  }
  h4{
    margin: 2rem 0;
    line-height: 1.75;
  }
  li{
    font-size: 1rem;
    line-height: 1.75;
    color: pink;
    font-weight: bold;
    list-style-type: none;
  }
  ul{
    margin-top: 2rem;
  }
  p{
    margin: 2rem 0;
    line-height: 1.75;
  }
  span {
      color: white;
      margin-left: 1rem;
    }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 5%;
  margin-right: 1rem;
  font-weight: 600;
  transition: all ease-in-out 250ms; 

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
        }

`;
const Info = styled.div`
  margin-left: 5rem;
  width: 350px;

  @media screen and (max-width: 1024px) {
    margin-left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        }
`;
