import React from 'react'
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';


export default function Navbar() {
    return (
        <div>
            <Row id="navbar">
        <Col>
          <Button variant="link">Jual</Button>
          <Button variant="link">Download</Button>
        </Col>
        <Col className="right">
          <Button variant="link">Daftar</Button>
          <Button variant="link">Login</Button>
        </Col>
      </Row>
      <Row id="header">
        <Col >
          <a className="icon" href="/"><FaShoppingBag/>Sample</a>
        </Col>
        <Col  className="col-8 mb-4">
          <InputGroup >
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
          </InputGroup>
        </Col>

        <Col className="right cart mr-3">
          <span><FaShoppingCart/></span>
        </Col>
      </Row>
        </div>
    )
}
