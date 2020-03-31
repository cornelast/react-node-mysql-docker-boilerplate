import React, {Component} from 'react';
import axios from 'axios';


class NewsCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subject: '',
            counter: 0,
        }
    }
    changeHandler = e => {
    this.setState({[e.target.name]:e.target.value})
    }
    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:8000/newscreate', this.state).then(
            response => {
                console.log(response);
                console.log('refresh');

            })
            .catch(error =>{
                console.log(error)
            }
        )

    }

    render() {
        const {subject} = this.state
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input type="text" name="subject" value={subject} onChange={this.changeHandler}/>
                        <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default NewsCreate;