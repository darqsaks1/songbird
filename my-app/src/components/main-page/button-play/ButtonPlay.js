import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mathRandom from '../../../data/formula'
import { setLevel, setGameMode } from '../../../actions/actions-creator'
import { UP_LEVEL, GAME_MODE, OPEN_ABOUT } from '../../../actions/actions-types'
const ButtonPlay = (props) => {
    const {
        currentBird, setCurrentBird
    } = props;
    const dispatch = useDispatch();
    let level = useSelector(state => state.game.level);
    const gameMode = useSelector(state => state.game.gameMode);
    useSelector(state => state.game.about);
    let random = 1;
    if (gameMode) {
        return (
            <button className='button-play' />
        );
    }
    return (

        <button className='button-play' onClick={() => {
            dispatch(setLevel(UP_LEVEL, level === 5 ? 0 : level += 1))
            dispatch(setGameMode(GAME_MODE))
            dispatch(setGameMode(OPEN_ABOUT))
            setCurrentBird(random++)
        }
        } />
    );
};

export default ButtonPlay;