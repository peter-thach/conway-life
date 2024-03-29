import {Nav, Navbar, NavDropdown, Button} from 'react-bootstrap';
import React, {Component} from 'react';
import './styles/navbar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href=".">Conway's Game of Life</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="w-100">
            <NavDropdown title="Patterns" className="nav-title">
              <NavDropdown title="Triominos" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('tri', 'tri1')}>1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tri', 'tri2')}>2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tri', 'tri3')}>3</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tri', 'tri4')}>4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tetrominos" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('tet', 'tet1')}>1</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tet', 'tet2')}>2</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tet', 'tet3')}>3</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('tet', 'tet4')}>4</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Still lifes" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('still', 'square')}>Square</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('still', 'boat')}>Boat</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('still', 'loaf')}>Loaf</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('still', 'ship')}>Ship</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('still', 'beehive')}>Beehive</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('still', 'tub')}>Tub</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Oscillators" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('osc', 'blinker')}>Blinker</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('osc', 'toad')}>Toad</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('osc', 'beacon')}>Beacon</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('osc', 'pulsar')}>Pulsar</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('osc', 'penta-decathlon')}>Penta-decathlon</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Spaceships" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('space', 'glider')}>Glider</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('space', 'lwss')}>Lightweight spaceship (LWSS)</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('space', 'mwss')}>Middleweight spaceship (MWSS)</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('space', 'hwss')}>Heavyweight spaceship (HWSS)</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Methuselahs" drop="right">
                <NavDropdown.Item onClick={() => this.props.onClick('methu', 'rpent')}>The R-pentomino</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('methu', 'diehard')}>Diehard</NavDropdown.Item>
                <NavDropdown.Item onClick={() => this.props.onClick('methu', 'acorn')}>Acorn</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            
            <Button variant={this.props.variant} onClick={() => this.props.onClick(null, 'start')} id="start-button">
              {this.props.start}  
            </Button>

            <Nav.Item className="nav-title">
              <Nav.Link onClick={() => this.props.onClick(null, 'randomize')}>
                Randomize Grid
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="nav-title">
              <Nav.Link onClick={() => this.props.onClick(null, 'clear')}>
                Clear Grid
              </Nav.Link>
            </Nav.Item>

            <NavDropdown title={"Speed: " + this.props.speed} className="nav-title">
              <NavDropdown.Item onClick={() => this.props.onClick(null, 'Slow')}>Slow</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.props.onClick(null, 'Normal')}>Normal</NavDropdown.Item>
              <NavDropdown.Item onClick={() => this.props.onClick(null, 'Fast')}>Fast</NavDropdown.Item>
            </NavDropdown>

            <Nav.Item className="ml-auto">
              <Nav.Link target="_blank" href="https://github.com/peter-thach" className="socials-icon">
                <i className="icon fa fa-github fa-lg mr-sm-2"></i>
              </Nav.Link>
              <Nav.Link target="_blank" href="https://www.linkedin.com/in/peter-thach/" className="socials-icon">
                <i className="icon fa fa-linkedin fa-lg mr-sm-2"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavigationBar;