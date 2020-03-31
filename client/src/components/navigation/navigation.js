import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import GeneralDocs from '../partials/home/algdocs';
import ZorgaanbiederList from "../partials/PDC/ZorgaanbiederList";
import '../navigation/navigation.css';
import NewsCreate from "../partials/home/news_create";
import NewsList from "../partials/home/news";

class NavigationSideBar extends Component {
    render(){
        return <div>

            <Router>
                <div className="sidebar">
                    <ul>
                        <li>
                            <Link to="/">Nieuws</Link>
                        </li>
                        <li>
                            <Link to="/pdc">PDC</Link>
                        </li>
                        <li>
                            <Link to="/exports">Exports</Link>
                        </li>
                    </ul>
                </div>
                <div className="main">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/pdc">
                            <PDC />
                        </Route>
                        <Route path="/exports">
                            <Dashboard />
                        </Route>
                    </Switch>
                </div>
            </Router>
       </div>
        function Home() {
            return (
                <div>
                    <h2>Nieuws</h2>
                    <NewsCreate />
                    <NewsList/>
                    <GeneralDocs/>
                </div>
            );
        }

        function PDC() {
            return (
                <div>
                    <h2>PDC</h2>
                    <ZorgaanbiederList />
                </div>
            );
        }

        function Dashboard() {
            return (
                <div>
                    <h2>Exports</h2>
                </div>
            );
        }

    }
};

export default NavigationSideBar;

