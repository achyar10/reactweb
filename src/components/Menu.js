import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from './Home'

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
                    <Navbar color="dark" dark expand="md">
                        <NavbarBrand>appsku</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink><Link to="/">Home</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/profile">Profile</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/service">Service</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/contact">Contact</Link></NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <main>
                        <Route path="/" exact component={Home} />
                    </main>
                </div>
            </BrowserRouter>
        )
    }
}
export default Menu