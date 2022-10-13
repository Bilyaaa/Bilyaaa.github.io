import { Navbar, Nav, Container } from "react-bootstrap";
import  $  from "jquery";
import React from "react";
import "../styles/Header.scss";
import { Link, Outlet } from "react-router-dom";


function Header() {

  function Menu() {
    if ($('.nav-small-opened').hasClass('hidden')) {
    document.querySelector('.nav-small-opened').classList.remove('hidden')
    $('.nav-small-opened div').css('opacity', '1')
    }
    else document.querySelector('.nav-small-opened').classList.add('hidden')
  }

  function hideMenu() {
    $('.nav-small-opened').classList.add('hidden')
    $('.nav-small').css('display', 'flex')
  }




  return (
    <>
    <Container
      style={{
        zIndex: "100",
        position: "fixed",
        margin: "0 auto",
        padding: " 1rem 0",
        top: "0",
        maxWidth: "100%",
        background: "white",
        borderBottom: "2px solid black",
      }}
    >
      <Navbar expand="lg">
        <Container>
          <Link
            to='/'
            style={{ letterSpacing: ".4em", fontSize: "1.7rem" }}
          >
            NEXT HAND
          </Link>
          <div className="nav-small" onClick={Menu}>
            <div>-</div>
            <div>-</div>
            <div>-</div>
          </div>
          <div className="nav-small-opened hidden">
          <Link to="/" onClick={hideMenu}><div>HOME</div></Link>
            <Link to="/shop" onClick={hideMenu}><div>SHOP</div></Link>
            <Link to="/delivery" onClick={hideMenu}><div>DELIVERY</div></Link>
            <Link to="/admin" onClick={hideMenu}><div>ADMIN</div></Link>
          </div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ justifyContent: "flex-end" }}
          > 
            <Nav className="nav-big">
              <Link className="nav-menu-a" to='/shop'>
                Shop
              </Link>
              <Link className="nav-menu-a" to='/basket'>
                Basket
              </Link>
              <Link className="nav-menu-a" to='/delivery'>
                Delivery
              </Link>
              <Link className="nav-menu-a" to='/admin'>
                ADMIN
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

    <Outlet />
    </>
  );
}

export default Header;
