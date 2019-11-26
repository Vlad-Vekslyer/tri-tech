import React from 'react';
import classNames from 'classnames';
import './Header.css';

const Header = ({ position, large, underline, children }) => {
    return (
        <div className={classNames("header-container", position, { "large": large }, { "underline": underline })}>
            <h1>
                {children}
            </h1>
        </div>
    );
}

export default Header;