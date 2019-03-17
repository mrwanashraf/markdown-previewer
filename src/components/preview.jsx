import React from 'react';
import marked from 'marked';
import '../scss/preview.scss'

export default class Preview extends React.Component {
    
    render() {
        marked.setOptions({
            breaks: true
        });
        let text = () => {
            return {__html:  marked(this.props.text)};
        }
    return (
        <section id="preview_parent">
            <section id="preview" dangerouslySetInnerHTML={text()} />
        </section>
        );
    }
}