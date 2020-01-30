import React from 'react';
import { NavLink } from 'react-router-dom'

const list = [
    { name: "home", path: "/" },
    { name: "filmy", path: "/filmy" },
    { name: "seriale", path: "/seriale" },
]

const Navigation: React.FC = () => {

    const menu = list.map(item => (
        <li key={item.name}>
            <NavLink to={item.path}>{item.name}</NavLink>
        </li>
    ))
    return (
        <ul>
            {menu}
        </ul>
    );
}

export default Navigation;
