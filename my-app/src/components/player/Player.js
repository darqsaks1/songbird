import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import birdsData from '../../data/birds';
import blackBird from '../../assets/images/blackBird.jpg'
import { UP_LEVEL } from '../../actions/actions-types'
import { setLevel } from '../../actions/actions-creator'
const Player = (props) => {
    const dispatch = useDispatch();
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
                onClick={(e) =>
                    dispatch(setLevel(UP_LEVEL, level === 5 ? 0 : level += 1))
                } />
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