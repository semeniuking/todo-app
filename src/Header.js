import React from 'react';
import './assets/scss/Header.scss';
import Calendar from "./components/UI/Calendar/Calendar";
import ListNavigation from "./components/UI/navBar/ListNavigation";

function Header() {
    return (
        <div className="Header">
            <Calendar/>
            <ListNavigation/>
        </div>
    );
}

export default Header;