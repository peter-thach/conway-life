import {Nav, Navbar, Container, NavDropdown, Button} from 'react-bootstrap'
import React, {Component} from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#">Conway's Game of Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Patterns">
              <NavDropdown title="Triominos" drop="right">
                <NavDropdown.Item>1</NavDropdown.Item>
                <NavDropdown.Item>2</NavDropdown.Item>
                <NavDropdown.Item>3</NavDropdown.Item>
                <NavDropdown.Item>4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tetrominos" drop="right">
                <NavDropdown.Item>1</NavDropdown.Item>
                <NavDropdown.Item>2</NavDropdown.Item>
                <NavDropdown.Item>3</NavDropdown.Item>
                <NavDropdown.Item>4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Still lifes" drop="right">
                <NavDropdown.Item>Square</NavDropdown.Item>
                <NavDropdown.Item>Boat</NavDropdown.Item>
                <NavDropdown.Item>Loaf</NavDropdown.Item>
                <NavDropdown.Item>Ship</NavDropdown.Item>
                <NavDropdown.Item>Beehive</NavDropdown.Item>
                <NavDropdown.Item>Tub</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Oscillators" drop="right">
                <NavDropdown.Item>Blinker</NavDropdown.Item>
                <NavDropdown.Item>Toad</NavDropdown.Item>
                <NavDropdown.Item>Beacon</NavDropdown.Item>
                <NavDropdown.Item>Pulsar</NavDropdown.Item>
                <NavDropdown.Item>Penta-decathlon</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Spaceships" drop="right">
                <NavDropdown.Item>Glider</NavDropdown.Item>
                <NavDropdown.Item>Lightweight spaceship (LWSS)</NavDropdown.Item>
                <NavDropdown.Item>Middleweight spaceship (MWSS)</NavDropdown.Item>
                <NavDropdown.Item>Heavyweight spaceship (HWSS)</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Methuselahs" drop="right">
                <NavDropdown.Item>The R-pentomino</NavDropdown.Item>
                <NavDropdown.Item>Diehard</NavDropdown.Item>
                <NavDropdown.Item>Acorn</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            
            <Button variant="success">Start Simulation!</Button>

            <Nav.Item>
              <Nav.Link href="#">
                Randomize Grid
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link href="#">
                Clear Grid
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title="Speed">
              <NavDropdown.Item>Slow</NavDropdown.Item>
              <NavDropdown.Item>Average</NavDropdown.Item>
              <NavDropdown.Item>Fast</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;