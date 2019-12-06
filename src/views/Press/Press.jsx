import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Article from '../../components/Press/Article/Article';
import ArticlesToggler from '../../components/Press/ArticlesToggler/ArticlesToggler';
import './Press.css';

const Press = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAbsolute, setIsAbsolute] = useState(false);
    const [articles, setArticles] = useState([1, 2, 3, 4, 5, 6]);
    const pressSection = useRef();

    document.onscroll = () => {
        setIsAbsolute(isOpen && (window.pageYOffset < pressSection.current.offsetTop - 315));
    }

    const handleClickToggler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section id="press" ref={pressSection}>
            <div className={classNames("grid-container", (isOpen ? "show" : "collapse"))}>
                {
                    articles.map((article) => {
                        return (
                            <Article style={{ height: "300" }} />
                        )
                    })
                }
            </div>
            <ArticlesToggler isOpen={isOpen} isAbsolute={isAbsolute} handleClickToggler={handleClickToggler} />
        </section>
    );
}

export default Press;