import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Table from "react-bootstrap/Table";
import PlayerRow from "./PlayerRow";
import Statistics from "./Statistics";
import "../assets/index.css";
import PlayerForm from "./PlayerForm";

const Players = ({ playersToFetch }) => {
  const [highlightingColor, setHighlightingColor] = useState("#dc3545");
  const [players, setPlayers] = useState(null);

  const url = `http://localhost:8000/${playersToFetch}`;

  const changeColorToDanger = () => {
    setHighlightingColor("#dc3545");
  };
  const changeColorToPrimary = () => {
    setHighlightingColor("#0d6efd");
  };

  const removePlayer = (id) => {
    console.log(url, id);
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetch(url) //run json-server --watch public/data/players.json --port 8000
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      })
      .catch((err) => console.log(err.message));
  }, [url]);

  return (
    <>
      <Buttons
        changeColorToDanger={changeColorToDanger}
        changeColorToPrimary={changeColorToPrimary}
      />
      <PlayerForm url={url} />
      {players && (
        <Table borderless variant="dark" className="table-wrapper">
          <thead>
            <tr>
              <th>Username</th>
              <th>Points</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              return (
                <PlayerRow
                  key={player.id}
                  {...player}
                  highlightingColor={highlightingColor}
                  onRemove={removePlayer}
                />
              );
            })}
            <Statistics players={players} />
          </tbody>
        </Table>
      )}
    </>
  );
};

export default Players;
