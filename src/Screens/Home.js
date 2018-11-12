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
                    <span>Check out my work.</span>
                    <span>See how I think.</span>
                    <span>Learn more about me.</span>
                </div>
            </div>
        </div>
    </Screen>
);
