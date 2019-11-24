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
                <NavDropdown.Item onClick={() => this.props.onClick('tri1')}>1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tri2')}>2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tri3')}>3</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tri4')}>4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tetrominos" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('tet1')}>1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tet2')}>2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tet3')}>3</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tet4')}>4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Still lifes" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('square')}>Square</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('boat')}>Boat</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('loaf')}>Loaf</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('ship')}>Ship</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('beehive')}>Beehive</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tub')}>Tub</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Oscillators" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('blinker')}>Blinker</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('toad')}>Toad</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('beacon')}>Beacon</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('pulsar')}>Pulsar</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('penta-decathlon')}>Penta-decathlon</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Spaceships" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('glider')}>Glider</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('lwss')}>Lightweight spaceship (LWSS)</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('mwss')}>Middleweight spaceship (MWSS)</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('hwss')}>Heavyweight spaceship (HWSS)</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Methuselahs" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('rpent')}>The R-pentomino</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('diehard')}>Diehard</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('acorn')}>Acorn</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            
            <Button variant={this.props.variant} onClick={() => this.props.onClick('start')}>
              {this.props.start}  
            </Button>

            <Nav.Item>
              <Nav.Link onClick={() => this.props.onClick('randomize')}>
                Randomize Grid
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link onClick={() => this.props.onClick('clear')}>
                Clear Grid
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title={"Speed: " + this.props.speed}>
              <NavDropdown.Item onClick={() => this.props.onClick('Slow')}>Slow</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.props.onClick('Normal')}>Normal</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.props.onClick('Fast')}>Fast</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;