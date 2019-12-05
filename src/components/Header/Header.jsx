import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import './Header.css';

const Header = ({ position, large, underline, children }) => {
    return (
        <div className={classNames("header-container", position)}>
            <h1 className={classNames({ "large": large }, { "underline": underline })}>
                {children}
            </h1>
        </div>
    );
}

Header.propTypes = {
    position: PropTypes.string.isRequired,
    large: PropTypes.bool,
    underline: PropTypes.bool
};

Header.defaultProps = {
    large: false,
    underline: false
};

export default Header;