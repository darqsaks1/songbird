import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    setLevel,
    setGameMode
} from '../../actions/actions-creator'
import {
    UP_LEVEL,
    GAME_MODE,
    OPEN_ABOUT,
    GET_SCORE,
    SET_ERRORS,
    SET_TO_WIN,
} from '../../actions/actions-types'
const Win = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.game.score);
    const gameMode = useSelector(state => state.game.gameMode);
    const win = useSelector(state => state.game.win);
    const setReloadButton = () => {
        dispatch(setLevel(UP_LEVEL, 0))
        dispatch(setLevel(GET_SCORE, 0))
        dispatch(setGameMode(SET_TO_WIN))
    }
    return (
        <div className='win-block'>
            <div>Поздравляем!</div>
            <div>Вы прошли викторину и набрали {score} из 30 возможных вопросов!</div>
            <button onClick={() => setReloadButton()}>Попробывать еще раз</button>
        </div>
    );
};

export default Win;