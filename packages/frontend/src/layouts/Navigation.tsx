import React from 'react';
import { NavLink } from 'react-router-dom'
<<<<<<< HEAD
import NAVIGATION from '../layouts/NavigationPath'

const Navigation: React.FC = () => {

    return (
        <ul>

            <li>
                <NavLink to={NAVIGATION.HOMEPAGE}>home</NavLink>
            </li>
            <li>
                <NavLink to={NAVIGATION.MOVIES}>filmy</NavLink>
            </li>
            <li>
                <NavLink to={NAVIGATION.SERIES}>seriale</NavLink>
            </li>

=======

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
>>>>>>> c4f754b8b4b942410ea67131c603a20a43312d69
        </ul>
    );
}

export default Navigation;
