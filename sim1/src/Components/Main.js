import React, { Component } from 'react';


export default class main extends Component {
   
    render() {
        return (
            //change from "top-section" to main-div
            <section className="main-section">
                <div className='shelf'><span className='shelf-span'>Shelf A</span></div>
                <div className='shelf'><span className='shelf-span'>Shelf B</span></div>
                <div className='shelf'><span className='shelf-span'>Shelf C</span></div>
                <div className='shelf'><span className='shelf-span'>Shelf D</span></div>

            </section>
        );
    }
}