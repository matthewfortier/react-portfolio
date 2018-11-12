import React from 'react';
import Tilt from 'react-tilt';

export default class MyTilt extends React.Component {
    render() {
        return (
            <Tilt className="Tilt" options={{ max: 25 }}>
                {this.props.children}
            </Tilt>
        );
    }
}
