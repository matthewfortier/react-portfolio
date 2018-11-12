import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-tilt';

export default class MyLink extends React.Component {
    render() {
        return (
            <Tilt
                className="Tilt"
                options={{ max: 25 }}
                style={{
                    height: 63,
                    paddingRight: 20,
                    paddingLeft: 20,
                    lineHeight: '63px'
                }}>
                <Link to={this.props.to}>{this.props.children}</Link>
            </Tilt>
        );
    }
}
