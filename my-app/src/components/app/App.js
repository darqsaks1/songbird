import React, { useState } from 'react';
import Header from '../header/Header'
import Sections from '../sections/Sections'
import Player from '../player/Player'
import Main from '../main-page/Main'
import mathRandom  from '../../data/formula'
import './App.scss';


const App = () => {
  const [currentBird, setCurrentBird] = useState(mathRandom)
  return (
    <div className="App">
      <Header />
      <Sections />
      <Player
        currentBird={currentBird}
        setCurrentBird={setCurrentBird}
      />
      <Main
        currentBird={currentBird}
        setCurrentBird={setCurrentBird}
       
         />
    </div>
  );
}


// const mapStateToProps = ({ game: { gameMode, level } }) => ({
//   gameMode, level,
// });

// const mapDispatchToProps = {
//   setGameMode,
//   setLevel,

// };
export default App 
// connect(mapStateToProps, mapDispatchToProps)(
//   );

