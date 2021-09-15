import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import PlayersList from "./PlayersList";
import Buttons from './Buttons';

function App() {
  const [highlightingColor, setHighlightingColor] = useState('#dc3545');
  
  const changeColorToDanger = () => {
    setHighlightingColor('#dc3545');
  }
  const changeColorToPrimary = () => {
    setHighlightingColor('#0d6efd');
  }

  const [players, setPlayers] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/players') //run json-server port 8000
      .then(res => res.json())
      .then(data => setPlayers(data));
  }, [])

  return (
    <>
      <Wrapper>
        <Buttons changeColorToDanger={changeColorToDanger} changeColorToPrimary={changeColorToPrimary}/>
        {players && <PlayersList players={players} highlightingColor={highlightingColor} />}
      </Wrapper>
    </>
  );
}

export default App;
