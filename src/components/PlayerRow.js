const PlayerRow = ({ id, username, points, highlightingColor, onRemove }) => {
  const onRemoveButtonClick = (id) => {
    onRemove(id);
  };
  return (
    <>
      <tr>
        <td
          style={{
            backgroundColor: points > 100 ? `${highlightingColor}` : "inherit",
          }}
        >
          {username}
        </td>
        <td
          style={{
            backgroundColor: points > 100 ? `${highlightingColor}` : "inherit",
          }}
        >
          {points}
        </td>
        <td
          onClick={() => onRemoveButtonClick(id)}
          style={{
            backgroundColor: points > 100 ? `${highlightingColor}` : "inherit",
            cursor: "pointer",
            textAlign: "center",
          }}
        >
          x
        </td>
      </tr>
    </>
  );
};

export default PlayerRow;
