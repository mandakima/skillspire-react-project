import React from 'react';
import { MenuItems } from "./MenuItems"
import './Navbar.css'

const NavBar = () => {
    return(
        <div>
              <nav className ="NavbarItems">
                <h1 className="navbar-logo">The Buzz</h1>
                <div className ="menu-icon">
                
                </div>

                <ul className ="nav-links">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className = 
                                {item.cName} 
                                href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                        })}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;

/* class Navbar extends Component {

    render() {
        return(
            <nav className ="NavbarItems">
                <h1 className="navbar-logo">The Buzz</h1>
                <div className ="menu-icon">
                
                </div>

                <ul className ="nav-links">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className = 
                                {item.cName} 
                                href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                        })}
                </ul>
            </nav>
        )
    }
}
*/