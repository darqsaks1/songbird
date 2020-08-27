import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import winGif from '../../assets/images/wingif.gif'
import {
    setLevel,
    setGameMode
} from '../../actions/actions-creator'
import {
    UP_LEVEL,
    GET_SCORE,

    SET_TO_WIN,
} from '../../actions/actions-types'
const Win = () => {
    const dispatch = useDispatch();
    const score = useSelector(state => state.game.score);
    useSelector(state => state.game.gameMode);
    useSelector(state => state.game.win);
    const setReloadButton = () => {
        dispatch(setLevel(UP_LEVEL, 0))
        dispatch(setLevel(GET_SCORE, 0))
        dispatch(setGameMode(SET_TO_WIN))
    }


    return (
        <div className='win-block'>
            <h1>ПОЗДРА</h1>
            <div>Вы прошли викторину и набрали {score} из 30 возможных вопросов!</div>
            <button className="learn-more" onClick={() => setReloadButton()}>Попробывать еще раз</button>
            <div>
                {score >= 30 ? <img src={winGif} alt='win' /> : <div></div>}
            </div>
        </div>
    );
};

export default Win;