import React from 'react';
import axios from 'axios';

export default class NewsList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            quantity: 0,
            news: []
            }
        }


    componentDidMount() {
        axios.get('http://localhost:8000/news')
            .then(res=> {
                console.log(res.data);
                this.setState({news: res.data});
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
                <ul>
                {this.state.news.map(newsitem => <li key={newsitem.id}>{newsitem.subject}</li>)}


            </ul>
            </div>
        )
    }
}