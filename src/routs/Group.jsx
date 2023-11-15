import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {motion} from "framer-motion";
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Group() {

    const [drink, setDrink] = useState([]);
    let params = useParams();

    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 25;
  
    const getDrink = (name) => {
      axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name}`)
      .then(res => {
        console.log(res.data.drinks)
        setDrink(res.data.drinks)
        // setDrink(res.data.drinks.slice(0,30))
      }).catch(err => {
        console.log(err)
      })
    }

    useEffect(() => {
        getDrink(params.type);
    }, [params.type]);
  

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(drink.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(drink.length/ itemsPerPage));  
  }, [itemOffset, itemsPerPage, drink]);


  
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % drink.length;
    setItemOffset(newOffset);
  };

  return (
    <Container>
      <ReactPaginate 
          breakLabel="..."
          nextLabel={<FaArrowRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={4}
          pageCount={pageCount}
          previousLabel={<FaArrowLeft/>}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName	="page-num"
          activeLinkClassName="active"
          previousClassName="previous"
          nextClassName="next"
        />
        <Grid
            animate = {{ opacity: 1}}
            initial = {{ opacity: 0 }}
            exit = {{ opacity: 0 }}
            transition = {{ duration: 0.5 }}
        >
          {currentItems.map(item => (
              <Card key={item.idDrink}>
                <Link to={'/cocktail/' + item.idDrink}>
                  <h4>{item.strDrink}</h4>
                  <img src={item.strDrinkThumb} alt="cocktail" />
                </Link>
              </Card> 
            ))}
        </Grid>
    </Container>
  )
}

const Container = styled.div`

  .pagination {
      text-align: center;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      list-style: none;
      font-size: 16px;
      gap: 5px;
      margin: 25px 0;

      .previous, .next {
        .page-num {
          padding: 9.5px 15px;
        }
      }
    
      .page-num {
        cursor: pointer;
        padding:  8px 15px;
        border-radius: 3px;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;

        &.active, &:hover {
          background-color: #d136a3;
        }
      }

}`;

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    margin: auto;
    img {
        width: 100%;
        max-width: 350px;
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

const Icons = styled.div`
  display: flex;
  gap: 12.5px;

  svg{
    font-size: 50px;
    cursor: pointer;
  }
`;