import React from 'react';
import Link from 'react-router-dom/Link';
import { css } from 'glamor';

export default class Overlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            messages: [
                'Hello!',
                'My name is Matthew Fortier.',
                'I am an Associate Software Engineer at Allscripts Healthcare.'
            ],
            current: 'Hello!',
            animation: 'animated fadeIn faster'
        };
    }

    componentDidMount() {
        setInterval(() => {
            var i =
                this.state.index < this.state.messages.length - 1
                    ? (this.state.index += 1)
                    : 0;
            var current = this.state.messages[i];
            this.setState({
                index: i,
                current: current
            });
        }, 3000);

        setInterval(() => {
            if (this.state.animation === 'animated fadeOut faster') {
                this.setState({
                    animation: 'animated fadeIn faster'
                });
            } else {
                this.setState({
                    animation: 'animated fadeOut faster'
                });
            }
        }, 3000);
    }

    render() {
        return (
            <div className="overlay">
                <h1 className={this.state.animation}>{this.state.current}</h1>
            </div>
        );
    }
}
