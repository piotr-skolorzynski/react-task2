import Wrapper from "./Wrapper";
import players from "./players";
import PlayersList from "./PlayersList";

function App() {
  return (
    <>
      <Wrapper>
        <PlayersList players={players} />
      </Wrapper>
    </>
  );
}

export default App;
