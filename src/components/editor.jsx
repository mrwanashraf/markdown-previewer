import React from 'react';
import '../scss/editor.scss';

export default class Editor extends React.Component {
    render() {
        return (
            <section id="editor_section">
                <textarea id="editor"
                    placeholder="write markdown here"
                    defaultValue={this.props.text}  
                    onChange={this.props.handleChange}
                />
            </section>
        );
    }
}