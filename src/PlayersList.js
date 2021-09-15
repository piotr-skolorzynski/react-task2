import Table from 'react-bootstrap/Table';
import Player from './Player';
import Statistics from './Statistics';

const PlayersList = ({players, highlightingColor}) => {
    return (   
        <Table borderless variant="dark" className="table-wrapper"> 
            <thead >
                <tr>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {players.map(player => {
                    return (
                        <Player key={player.id} {...player} highlightingColor={highlightingColor} />
                    )
                })}
                <Statistics players={players} />
            </tbody>
        </Table>
    );
}

export default PlayersList;