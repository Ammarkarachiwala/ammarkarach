import React from 'react';
const messages = [
    'hi',
    'hello',
    'yo',
    'anything-works',
    'almost-anything',
    "not-this-!@#5['",
    'well',
    'ok',
    'contact',
];

export default class extends React.Component {
    constructor(){
        super();
        this.state = {
            char: 2,
            idx: 0,
            hold: 20,
            message: messages[0],
        }
    }

    componentDidMount() {
      this.timer = setInterval(() => this.tick(), 100);
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    tick() {
      let { idx, char } = this.state;
      if (char - this.state.hold >= messages[idx].length) {
        idx += 1;
        char = 0;
      }
      if (idx === messages.length) {
          this.setState({
              idx: 0,
          })
      } else {
        this.setState({
          idx,
          char: char + 1,
          message: messages[idx].slice(0, char + 1),
        });
      }
    }
    render(){
      const {
          message,
          idx,
      } = this.state;
      const realEmail = idx === 5 ? 'contact' : messages[idx];
      return <div>
            <p> Feel free to email me at: </p>
            <a href={`mailto:${realEmail}@ammarkarachi.com`}>
                <span>{message}</span>
                <span>@ammarkarachi.com</span>
              </a>
        </div>
    }
}