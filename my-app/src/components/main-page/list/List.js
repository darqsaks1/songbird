import React from 'react';
import birdsData from '../../../data/birds'
import { GET_BIRD, HIDE_ABOUT, OFF_GAME, } from '../../../actions/actions-types'
import { setBirdNumber, setAboutBlock, setGameMode } from '../../../actions/actions-creator'
import { useDispatch, useSelector } from 'react-redux';

const List = (props) => {
    const {
        currentBird,
    } = props;
    const about = useSelector(state => state.game.about);
    const dispatch = useDispatch();
    const level = useSelector(state => state.game.level);
    const bird = useSelector(state => state.game.bird);

    return (
        <div className='list-block'>
            <ul onClick={() => dispatch(setAboutBlock(HIDE_ABOUT))}>
                <li  >
                    <div onClick={() => {
                        currentBird === 0 ? dispatch(setGameMode(OFF_GAME)) : console.log('a');
                        dispatch(setBirdNumber(GET_BIRD, 0));
                    }}>
                        {birdsData[level][0].name}
                    </div>
                </li>
                <li>
                    <div onClick={() => {
                        currentBird === 1 ? dispatch(setGameMode(OFF_GAME)) : console.log('a');
                        dispatch(setBirdNumber(GET_BIRD, 1));
                    }}>
                        {birdsData[level][1].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 2 ? dispatch(setGameMode(OFF_GAME)) : console.log('a');
                        dispatch(setBirdNumber(GET_BIRD, 2));
                    }}>
                        {birdsData[level][2].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 3 ? dispatch(setGameMode(OFF_GAME)) : console.log('a');
                        dispatch(setBirdNumber(GET_BIRD, 3));
                    }}>
                        {birdsData[level][3].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 4 ? dispatch(setGameMode(OFF_GAME)) : console.log('a');
                        dispatch(setBirdNumber(GET_BIRD, 4));
                    }}>
                        {birdsData[level][4].name}
                    </div>
                </li>
                <li  >
                    <div onClick={() => {
                        currentBird === 5 ? dispatch(setGameMode(OFF_GAME)) : console.log('a');
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