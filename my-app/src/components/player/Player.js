import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss'
import birdsData from '../../data/birds';
import blackBird from '../../assets/images/unknown.png'

const Player = (props) => {
    const player = useRef();
    let level = useSelector(state => state.game.level);
    let gameMode = useSelector(state => state.game.gameMode);
    const audio = useSelector(state => state.game.audio)
    const {
        currentBird,
    } = props;
    const stopAudioFunction = () => {
        if (audio) {
            player.current.audio.current.pause();
        }

    };
    return (
        <div className='player-block'>
            {stopAudioFunction()}
            <img src=
                {gameMode ? blackBird : birdsData[level][currentBird].image}
                className='bird-image'
                alt='player'

            />
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
                        onPause={() => stopAudioFunction()}

                        ref={player}
                    /></div>
            </div>
        </div>
    );
};

export default Player;