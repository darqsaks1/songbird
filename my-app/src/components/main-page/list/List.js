import React from 'react';
import birdsData from '../../../data/birds'
import { GET_BIRD, HIDE_ABOUT, OFF_GAME, GET_SCORE, SET_ERRORS } from '../../../actions/actions-types'
import { setBirdNumber, setAboutBlock, setGameMode } from '../../../actions/actions-creator'
import { useDispatch, useSelector } from 'react-redux';
import audioCorrect from '../../../assets/audio/correct.mp3'
import audioError from '../../../assets/audio/error.mp3'
const List = (props) => {

    const {
        currentBird,
    } = props;

    const dispatch = useDispatch();
    const currectAudio = new Audio(audioCorrect);
    const errorAudio = new Audio(audioError)

    useSelector(state => state.game.about);
    useSelector(state => state.game.bird);

    const level = useSelector(state => state.game.level);
    const game = useSelector(state => state.game.gameMode);
    const score = useSelector(state => state.game.score);
    let errors = useSelector(state => state.game.errors);
    const roundScore = useSelector(state => state.game.roundScore);

    const setTrueAnswer = () => {
        dispatch(setGameMode(OFF_GAME))
        if (game) {
            currectAudio.play()
            dispatch(setBirdNumber(GET_SCORE, score + (errors > roundScore ? 0 : roundScore - errors)))

        }
    }

    const setErrorAnswer = () => {
        if (game) {
            dispatch(setBirdNumber(SET_ERRORS, errors += 1))
            errorAudio.play()

        }
    }

    return (
        <div className='list-block'>
            <ul onClick={() => dispatch(setAboutBlock(HIDE_ABOUT))}>
                <li  >
                    <div
                        className='flex-row'
                        onClick={() => {
                            currentBird === 0 ? setTrueAnswer() : setErrorAnswer();
                            dispatch(setBirdNumber(GET_BIRD, 0));
                        }}>
                        <div />
                        <div>
                            <div></div>     {birdsData[level][0].name}
                        </div>
                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        currentBird === 1 ? setTrueAnswer() : setErrorAnswer();
                        dispatch(setBirdNumber(GET_BIRD, 1));
                    }}>
                        {birdsData[level][1].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 2 ? setTrueAnswer() : setErrorAnswer();
                        dispatch(setBirdNumber(GET_BIRD, 2));
                    }}>
                        {birdsData[level][2].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 3 ? setTrueAnswer() : setErrorAnswer();
                        dispatch(setBirdNumber(GET_BIRD, 3));
                    }}>
                        {birdsData[level][3].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 4 ? setTrueAnswer() : setErrorAnswer();
                        dispatch(setBirdNumber(GET_BIRD, 4));
                    }}>
                        {birdsData[level][4].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 5 ? setTrueAnswer() : setErrorAnswer();
                        dispatch(setBirdNumber(GET_BIRD, 5));
                    }}>
                        {birdsData[level][5].name}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default List;