import { useState, useEffect } from "react";
import Buttons from "./Buttons";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PlayerRow from "./PlayerRow";
import Statistics from "./Statistics";
import "../assets/index.css";

const generateRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) - min).toString();
};

const Players = ({ playersToFetch }) => {
  const [highlightingColor, setHighlightingColor] = useState("#dc3545");
  const [players, setPlayers] = useState(null);
  const [player, setPlayer] = useState({
    id: null,
    username: "",
    points: null,
  });
  const url = `http://localhost:8000/${playersToFetch}`;

  const changeColorToDanger = () => {
    setHighlightingColor("#dc3545");
  };
  const changeColorToPrimary = () => {
    setHighlightingColor("#0d6efd");
  };

  const handleChange = (e) => {
    setPlayer({
      ...player,
      username: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...player,
        id: generateRandomInteger(11, 100000),
        points: generateRandomInteger(0, 200),
      }),
    }).catch((err) => console.log(err.message));
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
      <Form className="form-addplayer" onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 mt-4 field-wrapper"
          controlId="form-addplayer"
        >
          <Form.Label size="lg">Add new player</Form.Label>
          <Form.Control
            name="player"
            value={player.username}
            size="lg"
            type="text"
            placeholder="Enter player's name"
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          className="mb-4 input-button"
          size="lg"
          variant="primary"
          type="submit"
        >
          Add
        </Button>
      </Form>
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
