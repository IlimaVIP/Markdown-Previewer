(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},15:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),o=n.n(i),s=(n(15),n(2)),l=n(3),c=n(5),h=n(4),m=n(6),u=n(1),d=(n(17),n(7)),p=n.n(d),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"editor_wrap"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"editor",className:"title"},"Write something here: "),r.a.createElement("textarea",{className:"form-control",id:"editor",onChange:this.props.newText,value:this.props.textSet})))}}]),t}(a.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"preview_wrap"},r.a.createElement("p",{className:"title"},"This is the result you will get: "),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:this.props.marked}))}}]),t}(a.Component),b=(n(20),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={text:v},n.newText=n.newText.bind(Object(u.a)(Object(u.a)(n))),n.getMarkdownText=n.getMarkdownText.bind(Object(u.a)(Object(u.a)(n))),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"newText",value:function(e){this.setState({text:e.target.value}),this.props.onTextChange&&this.props.onTextChange(e.target.value)}},{key:"getMarkdownText",value:function(e){return{__html:p()(e,{renderer:x})}}},{key:"render",value:function(){return r.a.createElement("div",{className:"main_wrapper"},r.a.createElement(g,{newText:this.newText,textSet:this.state.text}),r.a.createElement(w,{marked:this.getMarkdownText(this.state.text)}))}}]),t}(a.Component)),x=new p.a.Renderer;p.a.setOptions({breaks:!0});var v='# H1\n## H2\n### H3\n\n*This text will be italic*\n_Wait for it ... this will also be italic_\n**This text will be bold**\n__And you guessed it right... this will also be bold__\n*You **can** combine them*\n\nAs Grace Hopper said:\n> I\u2019ve always been more interested\n> in the future than in the past.\n\n* You could write some list\n* Item 2\n * Item 2a\n * Item 2b\n\n[I\'m an inline-style link](https://www.google.com)\n\nOr leave it empty and use the [link text itself].\n\n\nInline-style: \n![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")\n\nReference-style: \n![alt text][logo]\n\n[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"\n\n```javascript\nvar s = "JavaScript syntax highlighting";\nalert(s);\n```\n \n```python\ns = "Python syntax highlighting"\nprint s\n```\n \n```\nNo language indicated, so no syntax highlighting. \nBut let\'s throw in a <b>tag</b>.\n```\n\nColons can be used to align columns.\n\n| Tables        | Are           | Cool  |\n| ------------- |:-------------:| -----:|\n| col 3 is      | right-aligned | $1600 |\n| col 2 is      | centered      |   $12 |\n| zebra stripes | are neat      |    $1 |\n\n\n\nMarkdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3\n\nThree or more...\n\n---\n\nHyphens\n\n***\n\nAsterisks\n\n___\n\nUnderscores\n\n',y=b;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.5da12215.chunk.js.map