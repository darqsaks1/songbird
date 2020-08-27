import React from 'react';
import {  useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import birdsData from '../../data/birds';
import blackBird from '../../assets/images/unknown.png'

const Player = (props) => {
    
    let level = useSelector(state => state.game.level);
    let gameMode = useSelector(state => state.game.gameMode);
    const {
        currentBird,
    } = props;
    return (
        <div className='player-block'>
            <img src=
                {gameMode ? blackBird : birdsData[level][currentBird].image}
                className='bird-image' 
                alt='player'/>
            <div className='about-player flex-column'>
                <div className='bird-name'> {gameMode ? '*****' : birdsData[level][currentBird].name}</div>
                <div className='audio-player'>
                    <AudioPlayer
                        className='react-audio'
                        showDownloadProgress={false}
                        showFilledProgress={false}
                        layout={'horizontal-reverse'}
                        autoPlayAfterSrcChange={false}
                        src={birdsData[level][currentBird].audio}
                        showJumpControls={false}

                    /></div>
            </div>
        </div>
    );
};

export default Player;