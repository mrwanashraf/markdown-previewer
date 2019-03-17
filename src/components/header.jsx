import React from 'react';
import '../scss/header.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub);

export default class Header extends React.Component {
    render() {
        return(
            <header>
                <h1>Markdown Previewer</h1>
                <a href="https://github.com/mrwanashraf/markdown-previewer" target="_blank"><FontAwesomeIcon id="github" icon={faGithub} /></a>
            </header>
        );
    }
}