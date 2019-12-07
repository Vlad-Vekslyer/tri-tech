import React, { useState, useRef, useEffect } from 'react';
import Article from '../../components/Press/Article/Article';
import ArticlesToggler from '../../components/Press/ArticlesToggler/ArticlesToggler';
import './Press.scss';

const Press = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAbsolute, setIsAbsolute] = useState(false);
    const articles = require('./dummy-data.json').dummy;;
    const pressSection = useRef();
    const articlesDiv = useRef();

    const maxHeight = isOpen ? articlesDiv.current.scrollHeight + "px" : "";

    document.onscroll = () => {
        setIsAbsolute(isOpen && (window.pageYOffset < pressSection.current.offsetTop - 525));
    }

    const handleClickToggler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <section id="press" ref={pressSection}>
            <div ref={articlesDiv} className="grid-container" style={{ maxHeight }}>
                {
                    articles.map(({ img, title, date, author }) => {
                        return (
                            <Article img={img} title={title} date={date} author={author} />
                        )
                    })
                }
            </div>
            <ArticlesToggler isOpen={isOpen} isAbsolute={isAbsolute} handleClickToggler={handleClickToggler} />
        </section>
    );
}

export default Press;