const Player = ({username, points, highlightingColor}) => {
    return (
        <>
        <tr>
            <td style={{backgroundColor: points > 100 ? `${highlightingColor}` : 'inherit', }}>{username}</td>
            <td style={{backgroundColor: points > 100 ? `${highlightingColor}` : 'inherit'}}>{points}</td>
        </tr>
        </>
    );
}
 
export default Player;
