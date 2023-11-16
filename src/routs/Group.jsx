import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";
import {motion} from "framer-motion";
import { Link, useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

export default function Group() {

  const [visible, setVisible] = useState(false) 

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ 
    setVisible(true) 
    } 
    else if (scrolled <= 300){ 
    setVisible(false) 
    } 
  }; 
  window.addEventListener('scroll', toggleVisible); 

  const [drink, setDrink] = useState([]);
  let params = useParams();

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 25;
  const lastPage = drink.length/ itemsPerPage * itemsPerPage;

  const getDrink = (name) => {
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?${name}`)
    .then(res => {
      console.log(res.data.drinks)
      setDrink(res.data.drinks)
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

const goTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
};  

  return (
    <Container>
      <ReactPaginate id="paginate"
          breakLabel="..."
          nextLabel={<FaArrowRight />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel={<FaArrowLeft/>}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousClassName="previous-li"
          previousLinkClassName={itemOffset === 0 ? 'previous' : 'page-num'}
          nextClassName="next-li"
          nextLinkClassName={lastPage <= itemOffset + itemsPerPage ? 'next' : 'page-num'}
          activeLinkClassName="active"
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
          <UpButton style={{display: visible ? 'block' : 'none'}}>
            <IoIosArrowUp onClick={goTop}/>
          </UpButton>
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

      .previous-li, .next-li {
        padding: 0;
      }

      .previous, .next {
        padding: 8px 15px;
        border-radius: 3px;
        font-weight: 300;
        display: flex;
        justify-content: center;
        align-items: center;
        color: grey;
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

const UpButton = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 50px;

    svg {
      cursor: pointer;
    }
`;