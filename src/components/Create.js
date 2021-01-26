import React from 'react';
import axios from 'axios';

export default class Create extends React.Component {

    constructor(props) {
        super(props);
        // this.onChangeHostName = this.onChangeHostName.bind(this);
        // this.onChangePort = this.onChangePort.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            port: ''
        }
    }
    onChangeHostName = (e) => {
        this.setState({
            name: e.target.value
        });
    }
    onChangePort = (e) => {
        this.setState({
            port: e.target.value
        });
    }
    onSubmit = (e) => {
        e.preventDefault();

        const serverport = {
            name: this.state.name,
            port: this.state.port
        }

        const OWM_uri = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dd0b5d554fde8b734caa813b9deb2936';
        /*axios.post('http://localhost:4000/serverport/add',serverport)
            .then(res => console.log(res.data));*/
        axios.get(OWM_uri,serverport)
            .then(res => console.log(res.data));
        
         console.log(`name is ${this.state.name} and port is ${this.state.port}`);
        this.setState({
            name: '',
            port: ''
        })
    }

    render() {
        return (
            <div style={{marginTop: 50}}>
                <h3>Add New Server</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Add Host Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeHostName}/>
                    </div>
                    <div className="form-group">
                        <label>Add Server Port: </label>
                        <input type="text" className="form-control" value={this.state.port}  onChange={this.onChangePort}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}