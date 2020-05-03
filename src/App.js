import React, {Component} from 'react';
import './App.css';

import GuessesWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  render(){
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessesWords guessedWords={[
          {guessedWord: 'train', letterMatchCount: 3}
        ]} />
      </div>
    );
  }
}

export default App;
