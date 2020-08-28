import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import winGif from '../../assets/images/wingif.gif'
import winAudio from '../../assets/audio/winaudio.mp3'
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
    const audioForWin = new Audio(winAudio)
    const dispatch = useDispatch();
    const score = useSelector(state => state.game.score);
    useSelector(state => state.game.gameMode);
    useSelector(state => state.game.win);
    const setReloadButton = () => {
        dispatch(setLevel(UP_LEVEL, 0))
        dispatch(setLevel(GET_SCORE, 0))
        dispatch(setGameMode(SET_TO_WIN))
    }

    const winModal = () => {
        audioForWin.play();
        return (
            <img src={winGif} alt='win' className='win-image' />
        )
    }

    return (
        <div className='win-block'>
            <h1>ПОЗДРА</h1>
            <div>{score >= 30 ? 'Не, ну настоящий отец. Набрал 30+. По максам, братан':`Вы прошли викторину и набрали ${score} из 30 возможных вопросов!`}</div>
            <button className="learn-more" onClick={() => setReloadButton()}>Попробывать еще раз</button>
            <div>
                {score >= 30 ? winModal() : <div></div>}
            </div>
        </div>
    );
};

export default Win;