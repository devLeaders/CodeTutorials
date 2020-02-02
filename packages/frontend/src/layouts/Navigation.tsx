import React from 'react';
import { NavLink } from 'react-router-dom'
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

        </ul>
    );
}

export default Navigation;
