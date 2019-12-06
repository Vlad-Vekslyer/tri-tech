import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import Article from '../../components/Press/Article/Article';
import ArticlesToggler from '../../components/Press/ArticlesToggler/ArticlesToggler';
import './Press.css';

const Press = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [articles, setArticles] = useState([1, 2, 3, 4, 5, 6]);
    const pressSection = useRef(null);
    const bottom = pressSection.offsetTop - 190;

    const handleClickToggler = () => {
        setIsOpen(!isOpen);
    }
    return (
        <section ref={pressSection}>
            <div className={classNames("grid-container", (isOpen ? "show" : "collapse"))}>
                {
                    articles.map((article) => {
                        return (
                            <Article style={{ height: "300" }} />
                        )
                    })
                }
            </div>
            <ArticlesToggler handleClickToggler={handleClickToggler} isOpen={isOpen} />
        </section>
    );
}

export default Press;