import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detail from './components/Detail/Detail';
import Home from './page/home/Home';
import adminPage from './page/admin/adminPage';

function App() {

  return (
    <Container fluid>
      <Navbar/>
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin" component={adminPage} exact />
        <Route path="/detail/:id" component={Detail} />

      </Switch>
      </BrowserRouter>
      <Footer/>
    </Container>
    
  );
}

export default App;
