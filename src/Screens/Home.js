import React from 'react';
import Link from 'react-router-dom/Link';
import { css } from 'glamor';
import Tilt from '../components/Tilt';

import Screen from './Screen';

export default () => (
    <Screen>
        <div className="content home">
            <div className="left">
                <h1>Matthew Fortier.</h1>
                <h2>
                    Front-End developer, amateur designer, and baseball
                    enthusiast ⚾
                </h2>
                <div className="buttons">
                    <Link to="/portfolio">Check out my work.</Link>
                    <Link to="/blog">See how I think.</Link>
                    <Link to="/portfolio">Learn more about me.</Link>
                </div>
            </div>
        </div>
    </Screen>
);
