const Statistics = ({players}) => {
    
    const pointsArray = players.map(player => player.points);  

    const total = pointsArray.reduce((sum, next) => {
        return sum + next;
    }, 0);

    return (
        <>
        <tr>
            <td>Total</td>
            <td>{total}</td>
        </tr>
        <tr>
            <td>Average</td>
            <td>{total / pointsArray.length}</td>
        </tr>
        </>
    );
}
 
export default Statistics;