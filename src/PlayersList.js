import Table from 'react-bootstrap/Table';
import Player from './Player';
import Statistics from './Statistics';

const PlayersList = ({players}) => {
    return (   
        <Table bordered variant="dark" className="table-wrapper"> 
            <thead >
                <tr>
                    <th>Username</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {players.map(player => {
                    return (
                        <Player key={player.id} {...player} />
                    )
                })}
                <Statistics players={players} />
            </tbody>
        </Table>
    );
}

export default PlayersList;