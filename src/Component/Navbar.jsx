import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/home" className="main">
      <Nav.Item>
        <Link to="/Home" className="navhome">
          Home
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Student" className="navstudent">
          Student
        </Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Contact" className="navcontact">
          Contact
        </Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navbar;
