import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const Navigation = () => {
  return (
    <div className="buttons-container">
      <Link to="/players">
        <Button variant="danger" size="lg">
          Players
        </Button>
      </Link>
      <Link to="/newplayers">
        <Button variant="primary" size="lg">
          New Players
        </Button>
      </Link>
    </div>
  );
};

export default Navigation;
