import React from 'react';
import axios from 'axios';

export default class AanbiederVestigingen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
            incoming: [],
            api_url: 'http://localhost:8000/supplierdetails?viewid='+this.props.viewid+'&supplierid='+this.props.supplierid
        }
    }

    componentDidMount() {
        let url=this.state.api_url;
        console.log(url);
        axios.get(url)
            .then(res=> {
                console.log(res.data);
                this.setState({incoming: res.data});
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
                <table>
                    <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>supplierid</th>
                    </tr>
                    {this.state.incoming.map(office =>
                        <tr key={office.officeid}>
                            <td>{office.street}</td>
                            <td>{office.housenumber}</td>
                            <td>{office.description}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
}