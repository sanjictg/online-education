import React from "react";
import logo from "../../logo.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Menubar = ({ setSearchValue }) => {
  const setSearch = (e) => setSearchValue(e.target.value);
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="KH Rakib" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <input
              placeholder="Search course..."
              className="form-control w-100"
              onChange={setSearch}
            />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menubar;
