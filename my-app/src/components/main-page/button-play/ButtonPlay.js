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
    SET_WIN,
} from '../../../actions/actions-types'

const ButtonPlay = (props) => {

    const dispatch = useDispatch();
    let {
        currentBird, setCurrentBird
    } = props;
    let score = useSelector(state => state.game.score);
    let level = useSelector(state => state.game.level);
    const gameMode = useSelector(state => state.game.gameMode);
    useSelector(state => state.game.about);

    const setPlayButton = () => {
        dispatch(setLevel(UP_LEVEL, level += 1))
        dispatch(setGameMode(GAME_MODE))
        dispatch(setGameMode(OPEN_ABOUT))
        setCurrentBird(currentBird + mathRandom > 5 ?  1 : currentBird + mathRandom - 1)
        dispatch(setLevel(SET_ERRORS, 0))
        if (level > 5) {
            dispatch(setGameMode(SET_WIN))
        }
    }

    const renderButtonPlay = () => {
        if (gameMode) {
            return (
                <button className='button-play'>
                    <div className='game'>game</div>
                </button>
            );
        }

        return (
            <button className='button-play' onClick={() => setPlayButton()} >
                <div className='game'> NOT GAME </div>
            </button>
        );
    }


    return (
        <div>
            {renderButtonPlay()}
        </div>
    );
};

export default ButtonPlay;