import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import Players from "./components/Players";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <Wrapper>
        <Navigation />
        <Switch>
          <Route path="/players">
            <Players playersToFetch="players"/>
          </Route>
          <Route path="/newplayers">
            <Players playersToFetch="new_players" />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
