import Button from "react-bootstrap/Button";

const Buttons = ({changeColorToDanger, changeColorToPrimary}) => {
    return (
        <div className="buttons-container">
            <Button variant="danger" size="lg" onClick={changeColorToDanger}>Red</Button>
            <Button variant="primary" size="lg" onClick={changeColorToPrimary}>Blue</Button>
        </div>
    );
}
 
export default Buttons;