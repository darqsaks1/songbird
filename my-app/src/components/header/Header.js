import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const score = useSelector(state => state.game.score);
    return (
        <div className = 'header-block'>
            <div className = 'logo'>SongBird</div>
            <div className = 'score'>Score: {score}</div>
        </div>
    );
};

export default Header;