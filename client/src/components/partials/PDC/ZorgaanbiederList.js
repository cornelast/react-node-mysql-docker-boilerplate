import React from 'react';
import axios from 'axios';
import './zorgaanbiederkaart.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import AanbiederContracten from "./Zorgaanbiederkaart/AanbiederContracten";
import AanbiederContacten from "./Zorgaanbiederkaart/AanbiederContacten";
import AanbiederVestigingen from "./Zorgaanbiederkaart/AanbiederVestigingen";
import AanbiederOnderaannemers from "./Zorgaanbiederkaart/AanbiederOnderaannemers";
import AanbiederNotities from "./Zorgaanbiederkaart/AanbiederNotities";
import AanbiederBijlagen from "./Zorgaanbiederkaart/AanbiederBijlagen";
import AanbiederEvaluaties from "./Zorgaanbiederkaart/AanbiederEvaluaties";
import AanbiederExpertises from "./Zorgaanbiederkaart/AanbiederExpertises";
import AanbiederForum from "./Zorgaanbiederkaart/AanbiederForum";
import AanbiederKennispunt from "./Zorgaanbiederkaart/AanbiederKennispunt";
import AanbiederVerantwoordingen from "./Zorgaanbiederkaart/AanbiederVerantwoordingen";
import AanbiederToezichthouders from "./Zorgaanbiederkaart/AanbiederToezichthouders";



export default class ZorgaanbiederList extends React.Component {
state = {
    aanbieders: []
};

componentDidMount() {
    axios.get('http://localhost:8000/aanbieders')
        .then(res=> {
            console.log(res.data);
            this.setState({aanbieders: res.data});
        })
        .catch(res=>{
            if(res instanceof Error) {
                console.log(res.message);
            } else {
                console.log('Query ok');
                console.log(res.data);
            }
            })
    }

render () {
        return (
            <ul>
                {this.state.aanbieders.map(aanbieder =>
                    <div className='well' key={aanbieder.id}>
                        <div>
                            <button>{aanbieder.name} {aanbieder.id}</button>
                        </div>
                        <Router>
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/contracten">Contracten</Link>
                                    </li>
                                    <li>
                                        <Link to="/contacten">Contactpersonen</Link>
                                    </li>
                                    <li>
                                        <Link to="/vestigingen">Vestigingen</Link>
                                    </li>
                                    <li>
                                        <Link to="/onderaannemers">Onderaannemers</Link>
                                    </li>
                                    <li>
                                        <Link to="/notities">Notities</Link>
                                    </li>
                                    <li>
                                        <Link to="/bijlagen">Bijlagen</Link>
                                    </li>
                                    <li>
                                        <Link to="/evaluaties">Evaluaties</Link>
                                    </li>
                                    <li>
                                        <Link to="/expertises">Expertises</Link>
                                    </li>
                                    <li>
                                        <Link to="/forum">Forum</Link>
                                    </li>
                                    <li>
                                        <Link to="/toezichthouders">Toezichthouders</Link>
                                    </li>
                                    <li>
                                        <Link to="/verantwoordingen">Verantwoordingen</Link>
                                    </li>
                                    <li>
                                        <Link to="/kennispunt">Kennispunt</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <Switch>
                                    <Route exact path="/contracten">
                                        <AanbiederContracten viewid='contracts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/contacten">
                                        <AanbiederContacten viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/vestigingen">
                                        <AanbiederVestigingen viewid='offices_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/onderaannemers">
                                        <AanbiederOnderaannemers viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/notities">
                                        <AanbiederNotities viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/bijlagen">
                                        <AanbiederBijlagen viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/evaluaties">
                                        <AanbiederEvaluaties viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/expertises">
                                        <AanbiederExpertises viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/forum">
                                        <AanbiederForum viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/kennispunt">
                                        <AanbiederKennispunt viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/toezichthouders">
                                        <AanbiederToezichthouders viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                    <Route exact path="/verantwoordingen">
                                        <AanbiederVerantwoordingen viewid='contacts_v' supplierid={aanbieder.id}/>
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                    </div>
                )};
            </ul>
        )
}
}
