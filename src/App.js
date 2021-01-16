import './App.css';
import SequenceGenerator from './SequenceGenerator/SequenceGenerator';
import RunGenerator from './RunGenerator/RunGenerator';
import { useState } from 'react';


function App() {

  const [CurrentSequenceId, setCurrentSequenceId] = useState();

  const PassSequenceIdToRuns = (SequenceID) => {
    setCurrentSequenceId(<RunGenerator CurrentSequenceId={SequenceID}></RunGenerator>);
  }

  return (
    <div className="App">
      <h1>Mantra Bio HPLC</h1>
      <div className="MainContainer">
        <SequenceGenerator PassSequenceIdToRuns={PassSequenceIdToRuns}></SequenceGenerator>
        {CurrentSequenceId}
      </div>
    </div>
  );
}

export default App;