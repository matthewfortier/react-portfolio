import React from 'react';
import { Link } from 'react-router-dom';
import Ionicon from 'react-ionicons';
import Tilt from 'react-tilt';

export default class MyIcon extends React.Component {
    render() {
        return (
            <Tilt
                className="Tilt"
                options={{ max: 25 }}
                style={{
                    height: 63,
                    paddingRight: 10,
                    lineHeight: '73px'
                }}>
                <Ionicon {...this.props} />
            </Tilt>
        );
    }
}
