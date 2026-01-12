import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/Navbar.css";

function AppNavbar() {
  return (
    <Navbar
      variant="light"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
      fixed="top"
      id="navbar"
    >
      <Navbar.Brand>Intern Project</Navbar.Brand>
      <Nav justify variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link as={NavLink} to="/movies" className="nav-link">
            Movies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={NavLink} to="/sandbox" className="nav-link">
            Sandbox
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Sign in as: <a href="/login">Erdei Bálint</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
