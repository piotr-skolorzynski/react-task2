const Player = ({username, points}) => {
    return (
        <>
        <tr>
            <td style={{backgroundColor: points>100?'red':'inherit', }}>{username}</td>
            <td style={{backgroundColor: points>100?'red':'inherit'}}>{points}</td>
        </tr>
        </>
    );
}
 
export default Player;
