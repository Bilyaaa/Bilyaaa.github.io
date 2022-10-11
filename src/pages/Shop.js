
import { Container } from "react-bootstrap";
import { useContext } from "react";
import  Item from "../components/Item";
import  Filters from '../components/Filters'
import '../styles/Shop.scss'
import React from "react";
import { Context } from '../App'
import $ from 'jquery'





function Shop() {
  const {items} = useContext(Context);
  const{filteredItems, setFilteredItems} = useContext(Context);

  function showFilters() {
    $('.remove-hidden').css('display', 'none')
    $('.filter').removeClass('hidden')
  }

  function widthCheck() {
    if (window.outerWidth < 500) {
      $('.filter').addClass('hidden')
    }
  }

  document.addEventListener('resize', widthCheck())


  return (
    <Context.Provider value={{filteredItems, setFilteredItems}}>
    <Container className="main-container">
      <div className="filterContainer">
        <div className="remove-hidden" onClick={showFilters}>Filters</div>
        <div className="filter">
          <Filters items={items}></Filters>
        </div>
      </div>
      <div className="content-grid">
            {filteredItems.length
              ? filteredItems.map((item) => {
                return(
                      <Item key={item.id} item={item} />
                      )
              })
              : items.map((item) => {
                  return (
                      <Item key={item.id} item={item} />
                      )
              })}
      </div>
    </Container>
    </Context.Provider>
  );
}

export default Shop;
