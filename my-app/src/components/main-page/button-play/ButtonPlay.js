import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mathRandom from '../../../data/formula'
import {
    setLevel,
    setGameMode
} from '../../../actions/actions-creator'
import {
    UP_LEVEL,
    GAME_MODE,
    OPEN_ABOUT,
    SET_ERRORS,
    SET_TO_NULL,
    SET_WIN,
    SET_AUDIO_TO_FALSE,
} from '../../../actions/actions-types'

const ButtonPlay = (props) => {

    const dispatch = useDispatch();
    let {
        setCurrentBird
    } = props;
    useSelector(state => state.game.score);
    let level = useSelector(state => state.game.level);
    const gameMode = useSelector(state => state.game.gameMode);
    useSelector(state => state.game.about);
    const setPlayButton = () => {
        dispatch(setLevel(UP_LEVEL, level += 1))
        dispatch(setGameMode(GAME_MODE))
        dispatch(setGameMode(OPEN_ABOUT))
        dispatch(setGameMode(SET_TO_NULL))
        dispatch(setGameMode(SET_AUDIO_TO_FALSE))
        setCurrentBird(mathRandom(5))
        dispatch(setLevel(SET_ERRORS, 0))
        if (level > 5) {
            dispatch(setGameMode(SET_WIN))
        }
    }

    const renderButtonPlay = () => {
        if (gameMode) {
            return (
                <div class='container'>
                    <button className='button-play custom-btn btn-3 ' id='dont'>
                        <span>Угадайте</span>
                    </button>
                </div>
            );
        }

        return (
            <div class='container'>
                <button className='button-play custom-btn btn-3' onClick={() => setPlayButton()} >
                    <span>Играть дальше</span>
                </button>
            </div>
        );
    }

    return (
        <div>
            {renderButtonPlay()}
        </div>
    );
};

export default ButtonPlay;