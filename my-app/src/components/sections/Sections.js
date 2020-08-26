import React from 'react';
import sections from '../../data/sections'
import {  useSelector } from 'react-redux';

const Header = () => {
    let level = useSelector(state => state.game.level);
    return (
        <div className='section-block'>
            {sections.map((item, key) => <div key={key} className={level === key ? 'yellow' : 'red'}>{item}</div>)}
        </div>
    );
};

export default Header;