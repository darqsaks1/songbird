import React from 'react';
import birdsData from '../../../data/birds'
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import birdImage from '../../../assets/images/background.png'
const About = () => {
    const bird = useSelector(state => state.game.bird);
    const level = useSelector(state => state.game.level)
    const about = useSelector(state => state.game.about);

    if (about) {
        return (
            <div className='about-block'>
                <div className='bird-block'> Послушайте плеер и угадайте птицу </div>
                <img src={birdImage} alt='bird' />
            </div>
        );
    }
    return (
        <div className='about-block'>
            <div className='flex-row'>
                <img src={birdsData[level][bird].image} className='bird-image' alt='birdimage' />
                <div className='flex-column'>
                    <div className='name'> {birdsData[level][bird].name} </div>
                    <div className='species'> {birdsData[level][bird].species} </div>
                    <div> <AudioPlayer
                        className='react-audio'
                        showDownloadProgress={false}
                        showFilledProgress={false}
                        layout={'horizontal-reverse'}
                        autoPlayAfterSrcChange={false}
                        src={birdsData[level][bird].audio}
                        showJumpControls={false}
                    /></div>
                </div>
            </div>
            <div>
                {birdsData[level][bird].description}
            </div>
        </div >
    );
};

export default About;