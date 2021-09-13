import Table from 'react-bootstrap/Table';

const PlayersList = ({players}) => {
    return (   
        <Table striped bordered hover variant="dark"> 
            <thead>
                <tr>
                <th>Username</th>
                <th>Points</th>
                </tr>
            </thead>
            <tbody>
                {players.map(player => {
                    const {id, username, points} = player;
                    return (
                        <tr key={id}>
                            <td>{username}</td>
                            <td>{points}</td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    );
}

export default PlayersList;