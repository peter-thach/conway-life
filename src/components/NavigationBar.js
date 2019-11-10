import {Nav, Navbar, Container, NavDropdown, Button} from 'react-bootstrap'
import React, {Component} from 'react';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Conway's Game of Life</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown title="Patterns">
              <NavDropdown title="Triominos">

              </NavDropdown>
              <NavDropdown title="Tetrominos">

              </NavDropdown>
              <NavDropdown title="Still lifes">

              </NavDropdown>
              <NavDropdown title="Oscillators">

              </NavDropdown>
              <NavDropdown title="Spaceships">
                
              </NavDropdown>
              <NavDropdown title="Gliders">

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