import React from 'react';
import birdsData from '../../../data/birds'
import {
    GET_BIRD, HIDE_ABOUT, OFF_GAME, GET_SCORE, SET_ERRORS,
    SET_TO_1,
    SET_TO_2,
    SET_TO_3,
    SET_TO_4,
    SET_TO_5,
    SET_TO_6,
    SET_AUDIO,
    SET_TO_1_FALSE,
    SET_TO_2_FALSE,
    SET_TO_3_FALSE,
    SET_TO_4_FALSE,
    SET_TO_5_FALSE,
    SET_TO_6_FALSE
} from '../../../actions/actions-types'
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

    const li_first = useSelector(state => state.li.li_first);
    const li_second = useSelector(state => state.li.li_second);
    const li_third = useSelector(state => state.li.li_third);
    const li_four = useSelector(state => state.li.li_four);
    const li_five = useSelector(state => state.li.li_five);
    const li_six = useSelector(state => state.li.li_six);
    const level = useSelector(state => state.game.level);
    const game = useSelector(state => state.game.gameMode);
    const score = useSelector(state => state.game.score);
    let errors = useSelector(state => state.game.errors);
    const roundScore = useSelector(state => state.game.roundScore);

    const setTrueAnswer = () => {
        dispatch(setGameMode(OFF_GAME))
        if (game) {
            dispatch(setGameMode(SET_AUDIO))
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

    const setPointColor = (state) => {
        if (state === true) {
            return 'point green'
        }
        if (state === false) {
            return 'point close'
        }
        return 'point black'
    }

    return (
        <div className='list-block'>
            <ul onClick={() => dispatch(setAboutBlock(HIDE_ABOUT))}>
                <li  >
                    <div
                        className='flex-row'
                        onClick={() => {
                            if (currentBird === 0) {
                                setTrueAnswer();
                                if (game) {
                                    dispatch(setGameMode(SET_TO_1))
                                }
                            }

                            else {
                                if (game) {
                                    dispatch(setGameMode(SET_TO_1_FALSE))
                                }
                                if (li_first !== false) {

                                    setErrorAnswer();
                                }
                            }
                            dispatch(setBirdNumber(GET_BIRD, 0));
                        }
                        }>
                        <div />
                        <div>
                            <div className={setPointColor(li_first)}></div>
                            {birdsData[level][0].name}
                        </div>
                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        if (currentBird === 1) {
                            setTrueAnswer();
                            if (game) {
                                dispatch(setGameMode(SET_TO_2))
                            }
                        }
                        else {
                            if (game) {
                                dispatch(setGameMode(SET_TO_2_FALSE))
                            }
                            if (li_second !== false) {
                                setErrorAnswer();
                            }
                        }
                        dispatch(setBirdNumber(GET_BIRD, 1));
                    }}>
                        <div className={setPointColor(li_second)}></div>
                        {birdsData[level][1].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        if (currentBird === 2) {
                            setTrueAnswer();
                            if (game) {
                                dispatch(setGameMode(SET_TO_3))
                            }
                        }

                        else {
                            if (game) {
                                dispatch(setGameMode(SET_TO_3_FALSE))
                            }
                            if (li_third !== false) {
                                setErrorAnswer();
                            }
                        }
                        dispatch(setBirdNumber(GET_BIRD, 2));
                    }}>
                        <div className={setPointColor(li_third)}></div>
                        {birdsData[level][2].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        if (currentBird === 3) {
                            setTrueAnswer();
                            if (game) {
                                dispatch(setGameMode(SET_TO_4))
                            }
                        }

                        else {
                            if (game) {
                                dispatch(setGameMode(SET_TO_4_FALSE))
                            }
                            if (li_four !== false) {
                                setErrorAnswer();
                            }
                        }
                        dispatch(setBirdNumber(GET_BIRD, 3));
                    }}>
                        <div className={setPointColor(li_four)}></div>
                        {birdsData[level][3].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        if (currentBird === 4) {
                            setTrueAnswer();
                            if (game) {
                                dispatch(setGameMode(SET_TO_5))
                            }
                        }

                        else {
                            if (game) {
                                dispatch(setGameMode(SET_TO_5_FALSE))
                            }
                            if (li_five !== false) {
                                setErrorAnswer();
                            }
                        }
                        dispatch(setBirdNumber(GET_BIRD, 4));
                    }}>
                        <div className={setPointColor(li_five)}></div>
                        {birdsData[level][4].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        if (currentBird === 5) {
                            setTrueAnswer();
                            if (game) {
                                dispatch(setGameMode(SET_TO_6))
                            }
                        }

                        else {
                            if (game) {
                                dispatch(setGameMode(SET_TO_6_FALSE))
                            }
                            if (li_six !== false) {
                                setErrorAnswer();
                            }
                        }
                        dispatch(setBirdNumber(GET_BIRD, 5));
                    }}>
                        <div className={setPointColor(li_six)}></div>
                        {birdsData[level][5].name}
                    </div>
                </li>
            </ul>
        </div >
    );
};

export default List;