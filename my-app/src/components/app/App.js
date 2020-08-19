import React, { useState } from 'react';
import Header from '../header/Header'
import Sections from '../sections/Sections'
import Player from '../player/Player'
import Main from '../main-page/Main'
import Win from '../win/Win'
import mathRandom from '../../data/formula'
import './App.scss';
import { setGameMode } from '../../actions/actions-creator'
import { useDispatch, useSelector } from 'react-redux';
import { SET_WIN } from '../../actions/actions-types';
const App = () => {
  let level = useSelector(state => state.game.level);
  const [currentBird, setCurrentBird] = useState(mathRandom)
  let win = useSelector(state => state.game.win);
  const setWinModal = () => {
    if (win === true) {
      return (<Win />);
    }
    return (
      <div>
        <Player
          currentBird={currentBird}
          setCurrentBird={setCurrentBird}
        />
        <Main
          currentBird={currentBird}
          setCurrentBird={setCurrentBird}
        />
      </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <Sections />
      {setWinModal()}
    </div>
  );
}

export default App
