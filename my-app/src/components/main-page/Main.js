import React from 'react';
import { connect } from 'react-redux';
import List from './list/List'
import About from './about/About'
import ButtonPlay from './button-play/ButtonPlay'

const Main = () => {
    return (
        <div className='main-block'>
            <div className='space-between'>
                <List />
                <About  />
            </div>
            <ButtonPlay />
        </div>
    );
};


  export default Main;