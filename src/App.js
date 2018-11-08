import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import marked from 'marked';
import Editor from './components/edditor';
import Preview from './components/preview';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: placeholder
    }
    this.newText = this.newText.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
  }
  
  newText(event) {
    this.setState({
      text: event.target.value
    });
    if (this.props.onTextChange) {
      this.props.onTextChange(event.target.value);
    }
  }
  getMarkdownText(text) {
    let rawMarkup = marked(text, {renderer: renderer});
    return { __html: rawMarkup };
  }
  
  render() {
    return (
       <div className="main_wrapper">
          <Editor newText={this.newText} textSet={ this.state.text } />
          <Preview marked={this.getMarkdownText(this.state.text)} />
        </div>
    );
  }
}
const renderer = new marked.Renderer();
marked.setOptions({
  breaks: true,
});
const placeholder =  
`# H1
## H2
### H3

*This text will be italic*
_Wait for it ... this will also be italic_
**This text will be bold**
__And you guessed it right... this will also be bold__
*You **can** combine them*

As Grace Hopper said:
> I’ve always been more interested
> in the future than in the past.

* You could write some list
* Item 2
 * Item 2a
 * Item 2b

[I'm an inline-style link](https://www.google.com)

Or leave it empty and use the [link text itself].


Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

\`\`\`javascript
var s = "JavaScript syntax highlighting";
alert(s);
\`\`\`
 
\`\`\`python
s = "Python syntax highlighting"
print s
\`\`\`
 
\`\`\`
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
\`\`\`

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |



Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

`;

export default App;
