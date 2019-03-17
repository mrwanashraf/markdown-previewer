import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/style.scss';
import Header from '../components/header';
import Editor from '../components/editor';
import Preview  from '../components/preview';

const app = document.querySelector("#app");

class MarkdownPreviewer extends React.Component {
    constructor(props) {
        super(props);
        this.defaultText = `# change the text inside textarea\n## to be able to see your\n[markdown](https://www.markdownguide.org/)\n\n\`<h1>hello world</h1>\`\n \`\`\`\nreturn true\n\`\`\`\n- **list 1**\n- list 2\n- list 3\n\n> blockquote\n\n![markdown logo](https://cdn.iconscout.com/icon/free/png-256/markdown-433293.png)`;       
        this.state = {
            text: this.defaultText
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
       this.setState({
            text: e.target.value
       });
    }

    render() {
        return (
            <section>
                <Header />
                <Editor text={this.state.text} handleChange={this.handleChange}/>
                <Preview text={this.state.text}/>
            </section>
        )
    }
}

ReactDOM.render(<MarkdownPreviewer />, app);