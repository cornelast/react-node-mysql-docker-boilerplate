import React from 'react';
import axios from 'axios';

export default class GeneralDocs extends React.Component {
    state = {
        GeneralDocs: []
    };

    componentDidMount() {
        axios.get('http://localhost:8000/generaldocs')
            .then(res=> {
                console.log(res.data);
                this.setState({GeneralDocs: res.data});
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
            <div>
            <h2>Documenten</h2>
            <ul>
                {this.state.GeneralDocs.map(GeneralDoc =>
                    <li key={GeneralDoc.id}><a href={GeneralDoc.file}>{GeneralDoc.name}</a></li>)}
            </ul>
            </div>

        )
    }
}