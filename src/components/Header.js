import { Navbar, Nav, Container } from "react-bootstrap";
import  Burger  from "../components/Burger";
import React from "react";
import "../styles/Header.scss";
import { Link, Outlet } from "react-router-dom";


function Header() {


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
          <Burger />
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
