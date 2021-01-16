import './App.css';
import SequenceGenerator from './SequenceGenerator/SequenceGenerator';
import RunGenerator from './RunGenerator/RunGenerator';
import ChromatogramContainer from './ChromatogramContainer/ChromatogramContainer';
import ComponentsContainer from './ComponentsContainer/ComponentsContainer';
import { useState } from 'react';


function App() {

  const [CurrentRuns, setCurrentRuns] = useState();
  const [CurrentChromatogram, setCurrentChromatogram] = useState();
  const [CurrentComponents, setCurrentComponents] = useState();

  const ClearChromatogramAndComponents = () => {
      setCurrentChromatogram(null);
      setCurrentComponents(null);
  }

  const PassChromatogramData = (ChromatogramData) => {
    setCurrentChromatogram(<ChromatogramContainer ChromatogramData={ChromatogramData}></ChromatogramContainer>);
  }

  const PassComponentData = (ComponentData) => {
    setCurrentComponents(<ComponentsContainer ComponentData={ComponentData}></ComponentsContainer>);
  }

  const PassSequenceIdToRuns = (SequenceID) => {
    ClearChromatogramAndComponents();
    setCurrentRuns(<RunGenerator CurrentSequenceId={SequenceID} PassChromatogramData={PassChromatogramData} PassComponentData={PassComponentData}></RunGenerator>);
  }

  return (
    <div className="App">
      <h1>Mantra Bio HPLC</h1>
      <div className="MainContainer">
        <SequenceGenerator PassSequenceIdToRuns={PassSequenceIdToRuns}></SequenceGenerator>
        {CurrentRuns}
        {CurrentChromatogram}
        {CurrentComponents}
      </div>
    </div>
  );
}

export default App;