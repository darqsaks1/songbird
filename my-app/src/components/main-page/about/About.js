import React, { useEffect, useState } from 'react';
import birdsData from '../../../data/birds'
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

const About = () => {
    const level = useSelector(state => state.game.level);
    return (
        <div className='about-block'>
            <div className='flex-row'>
                <img src={birdsData[level][1].image} className='bird-image' />
                <div className='flex-column'>
                    <div> {birdsData[level][1].name} </div>
                    <div> {birdsData[level][1].species} </div>
                    <div> <AudioPlayer
                        src={birdsData[level][1].audio}
                    /></div>
                </div>
            </div>
            <div>
            {birdsData[level][1].description}
            </div>
        </div>
    );
};

export default About;