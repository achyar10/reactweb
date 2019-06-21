import React from "react";
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './Home'
import Profile from './Profile'
import logo from '../media/logo-white.png'

class Menu extends React.Component {

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.state = {
            isOpen: false
        }
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar className="nav-apps" dark expand="md">
                        <Container>
                            <NavbarBrand className="text-white">
                                <img src={logo} className="img-fluid logo" alt="logo" />
                            </NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                    <NavItem>
                                        <NavLink><Link className="text-white" to="/">Home</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link className="text-white" to="/profile">Profile</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link className="text-white" to="/service">Service</Link></NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink><Link className="text-white" to="/contact">Contact</Link></NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Container>
                    </Navbar>
                    <main>
                        <Route path="/" exact component={Home} />
                        <Route path="/profile" exact component={Profile} />
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}
export default Menu