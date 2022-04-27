import { Button } from 'react-bootstrap';
import React from 'react';
import './SearchBox.css'
const searchBox = () => {
    return (
        <div>
            <input className='search' type="search"/>
            <Button className='ps-2 m-3' variant="outline-dark">Search</Button>
        </div>
    );
};

export default searchBox;