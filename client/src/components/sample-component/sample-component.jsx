import React, {Component} from 'react';
import axios from 'axios';

class SampleComponent extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    axios.get(`http://localhost:${process.env.REACT_APP_SERVER_PORT}/test`, {
      params: {
        table: 'sample',
      }}).then((data) => {
        this.setState({ users: data })
        console.log(this.state.users)
      })
    }
    render() {

      return (
          <div className="container">
            <div className="col-xs-8">
              <h1>React Axios Example</h1>
              {this.state.users.map((user) => (
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{user.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {user.email}
                      </h6>
                    </div>
                  </div>
              ))}
            </div>
          </div>


      );
    }

}
