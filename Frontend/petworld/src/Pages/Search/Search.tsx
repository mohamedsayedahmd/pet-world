// src/App.js
import React, { useState } from 'react';
import SearchBar from './SearchBar';
import './searchBar.css'
import { Row,Col,Button } from 'react-bootstrap';

const SearchImg = require('./SearchImg.jpg'); // Import the image using require

const Search = () => {
  return (
    <div className="container mt-5">
        <h1 className='search_bar_title'>Search Bar</h1>
        <SearchBar/>
        <Row className="justify-content-center">
            <Col className="text-center">
                <img src={SearchImg}
                className='border rounded image-search-bar'
                alt="Search" 
                width={340} 
                height={240} />
            </Col>
        </Row>
    </div>
  );
};
export default Search;
