import React, { useState, useRef } from 'react';
import Header from '../../components/Header/Header';
import Article from '../../components/Press/Article/Article';
import ArticlesToggler from '../../components/Press/ArticlesToggler/ArticlesToggler';
import '../../styles/container.scss';
import './Press.scss';

const Press = () => {
    const [isOpen, setIsOpen] = useState(false);
    const articles = require('./dummy-data.json').dummy;
    const defaultArticles = articles.slice(0, 3);
    const restOfArticles = articles.slice(3, articles.length);
    const restOfArticlesDiv = useRef();

    const maxHeight = isOpen ? restOfArticlesDiv.current.scrollHeight + "px" : "0";

    return (
        <section id="press" className="container">
            <div className="cover"></div>
            <Header position="center">
                Press
            </Header>
            <div className="grid-container initial">
                {
                    defaultArticles.map((articles) => {
                        return (
                            <Article {...articles} />
                        )
                    })
                }
            </div>
            <div>
                <div ref={restOfArticlesDiv} className="grid-container" style={{ maxHeight, marginBottom: isOpen && "35px" }}>
                    {
                        restOfArticles.map((articles) => {
                            return (
                                <Article {...articles} />
                            )
                        })
                    }
                </div>
                <ArticlesToggler isOpen={isOpen} handleClickToggler={() => setIsOpen(!isOpen)} />
            </div>
        </section>
    );
}

export default Press;