import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const generateRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) - min).toString();
};

const PlayerForm = ({ url }) => {
  const [player, setPlayer] = useState({
    id: null,
    username: "",
    points: null,
  });

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

  return (
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
  );
};

export default PlayerForm;
