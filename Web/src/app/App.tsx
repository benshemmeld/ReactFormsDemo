import * as React from 'react'
import { Router, Route, Switch } from 'react-router'
import { Link } from 'react-router-dom'
import * as H from 'history'
import * as Pages from './components/pages'

export class App extends React.Component<{}, {}> {

    render(): JSX.Element {
        return (
            <Router history={H.createBrowserHistory()}>
                <>
                    <div className="navbar navbar-inverse navbar-fixed-top">
                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <Link to="/" className="navbar-brand">React Template</Link>
                            </div>
                            <div className="navbar-collapse collapse">
                                <ul className="nav navbar-nav">
                                    <li><Link to="/Page1">Page 1</Link></li>
                                    <li><Link to="/Page2">Page 2</Link></li>
                                    <li><Link to="/Page3">Page 3</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container body-content">
                        <Switch>
                            <Route exact path="/" component={Pages.Page1} />
                            <Route path="/Page1" component={Pages.Page1} />
                            <Route path="/Page2" component={Pages.Page2} />
                            <Route path="/Page3" component={Pages.Page3} />
                            <Route path="*" component={Pages.NotFound} />
                        </Switch>
                    </div>
                </>
            </Router>
        );
    }
}