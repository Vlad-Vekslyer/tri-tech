import React from 'react';
import classNames from 'classnames';
import PropTypes from "prop-types";
import './ArticlesToggler.scss';
import ArrowIcon from '../ArrowIcon';

const ArticlesToggler = ({ isOpen, isAbsolute, handleClickToggler }) => {
    const togglerText = isOpen ? "Fold Up" : "Show More";

    return (
        <div className={classNames("articles-toggler-container", { "sticky": isOpen && !isAbsolute }, { "absolute": isAbsolute })}>
            <div className="toggler" onClick={handleClickToggler}>
                <div className={classNames("arrow", { "up": isOpen })}>
                    <ArrowIcon />
                </div>
                <div>{togglerText}</div>
            </div>
        </div>
    );
}

ArticlesToggler.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

ArticlesToggler.defaultProps = {
    isOpen: false
};

export default ArticlesToggler;