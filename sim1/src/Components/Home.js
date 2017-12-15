import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';


// 37E-2
export default class Home extends Component {
   
    render() {
        return (
            // 36G
            <section className="main-section">
                <div className='shelf'><span className='shelf-span'>Shelf A</span></div>
                <div className='shelf'><span className='shelf-span'>Shelf B</span></div>
                <div className='shelf'><span className='shelf-span'>Shelf C</span></div>
                <div className='shelf'><span className='shelf-span'>Shelf D</span></div>

            </section>
        );
    }
}