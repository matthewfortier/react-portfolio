import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tilt from 'react-tilt';

import Home from 'Screens/Home';
import About from 'Screens/About';
import Portfolio from 'Screens/Portfolio';
import Blog from 'Screens/Blog';

import Link from './components/Link';
import Icon from './components/Icon';
import Overlay from './components/Overlay';

import 'App.scss';

import { spring, AnimatedSwitch } from 'react-router-transition';

// silly workaround for gh-pages
const basename =
    process.env.NODE_ENV === 'production' ? '/react-router-transition' : null;

function glide(val) {
    return spring(val, {
        stiffness: 174,
        damping: 24
    });
}

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
}

const pageTransitions = {
    atEnter: {
        offset: 100
    },
    atLeave: {
        offset: glide(-100)
    },
    atActive: {
        offset: glide(0)
    }
};

function handleMouseMove(event) {
    console.log(`${event.clientX}, ${event.clientY}`);
}

class App extends React.Component {
    constructor(props) {
        super(props);
        // Don't do this!
        this.state = {
            mouseX: 0,
            mouseY: 0,
            x: 0,
            y: 0,
            size: 40
        };
    }

    componentDidMount() {
        document.body.addEventListener('mousemove', e => {
            if (
                e.target.className == 'Tilt' ||
                e.target.tagName == 'A' ||
                e.target.tagName == 'SPAN'
            ) {
                this.setState({
                    size: 20
                });
            } else {
                this.setState({
                    size: 40
                });
            }
            this.setState({
                mouseX: e.clientX,
                mouseY: e.clientY
            });
        });

        setInterval(() => {
            let targetX = this.state.mouseX;
            let dx = targetX - this.state.x;

            let targetY = this.state.mouseY;
            let dy = targetY - this.state.y;

            this.setState({
                x: this.state.x + dx * 0.1,
                y: this.state.y + dy * 0.1
            });
        }, 13.337);
    }

    myHandler(e) {}

    render() {
        return (
            <Router basename={basename}>
                <Route
                    render={({ location }) => (
                        <div className="app">
                            <div
                                className="cursor"
                                style={{
                                    left: this.state.x - this.state.size / 2,
                                    top: this.state.y - this.state.size / 2,
                                    height: this.state.size,
                                    width: this.state.size
                                }}
                            />
                            <div className="nav">
                                {/* <Tilt
                                    className="Tilt"
                                    options={{ max: 25 }}
                                    style={{
                                        height: 63,
                                        paddingRight: 20,
                                        lineHeight: '63px'
                                    }}>
                                    <span>Matthew Fortier.</span>
                                </Tilt> */}
                                <div className="links">
                                    <Link to="/">Home</Link>
                                    <Link to="/blog">Blog</Link>
                                    <Link to="/portfolio">Portfolio</Link>
                                    <Link to="/about">About</Link>
                                </div>
                            </div>
                            <AnimatedSwitch
                                className="switchRule"
                                {...pageTransitions}
                                runOnMount={location.pathname === '/'}
                                mapStyles={styles => ({
                                    transform: `translateX(${styles.offset}%)`
                                })}
                                location={{ ...location, key: '' }}>
                                <Route path="/" exact component={Home} />
                                <Route path="/about" component={About} />
                                <Route path="/blog" component={Blog} />
                                <Route
                                    path="/portfolio"
                                    component={Portfolio}
                                />
                            </AnimatedSwitch>
                            {/* <footer>
                                <Icon
                                    icon="logo-github"
                                    fontSize="28px"
                                    color="black"
                                    onClick={() =>
                                        openInNewTab(
                                            'https://github.com/matthewfortier'
                                        )
                                    }
                                />
                                <Icon
                                    icon="logo-codepen"
                                    fontSize="28px"
                                    color="black"
                                    onClick={() =>
                                        openInNewTab(
                                            'https://codepen.io/matthewfortier/'
                                        )
                                    }
                                />
                                <Icon
                                    icon="logo-linkedin"
                                    fontSize="28px"
                                    color="black"
                                    onClick={() =>
                                        openInNewTab(
                                            'https://www.linkedin.com/in/matthewfortier/'
                                        )
                                    }
                                />
                            </footer> */}
                        </div>
                    )}
                />
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
