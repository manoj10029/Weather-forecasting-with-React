import React from 'react';
import axios from 'axios';

export default class ShowWeather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'Bristol',
            country: 'United Kindom',
            temp_min:''
        }
    }
    componentDidMount() {
        // Call fn weather forecasting  on load
        this.getWeatherforecast();       
    }
    onChangeCityName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeCountryName = (e) => {
        this.setState({
            country: e.target.value
        });
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        // Call fn weather forecasting
        this.getWeatherforecast();       
          console.log(`Country is ${this.state.country} & City is ${this.state.name}`);
        document.getElementById('txt_city').innerHTML = this.state.name; 
        document.getElementById('txt_country').innerHTML = this.state.country; 
        this.setState({
            name: '',
            country: ''
        }); 
    }

    async getWeatherforecast(){
         const serverport = {
            name: this.state.name,
            country: this.state.country
        }

        const OWM_uri = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.name},${this.state.country}&APPID=dd0b5d554fde8b734caa813b9deb2936`;
        /*axios.post('http://localhost:4000/serverport/add',serverport)
            .then(res => console.log(res.data)); res => this.setState({ temp_data: res.data})*/
    var temp_min = document.getElementById('temp_min'); 
    var temp_max = document.getElementById('temp_max'); 
    var wind_speed = document.getElementById('wind_speed'); 
    var txt_city = document.getElementById('txt_city'); 
    var txt_country = document.getElementById('txt_country'); 
      
    let weather = await axios.get(OWM_uri, serverport)
              .then(function (response) {
                return response.data;
              });
     // Show weather forecast data         
    temp_min.innerHTML =  (weather.main.temp_min/10).toFixed(2)+" <sup>0</sup>C" ;
    temp_max.innerHTML =  (weather.main.temp_max/10).toFixed(2)+" <sup>0</sup>C" ;
    wind_speed.innerHTML =  weather.wind.speed ;
    txt_city.innerHTML =  this.state.name;
    txt_country.innerHTML = this.state.country;
   // console.log(weather.data);        

    }

    render() {
        return (
            <div style={{marginTop: 50}}>
            <div>
                <div class="container-fluid">
                <div class="d-inline p-2 bg-primary text-white md-5" id="txt_city">{this.state.country}</div>
                <div class="d-inline p-2 bg-dark text-white" id="txt_country">{this.state.name}</div>
                <br/><br/>
                    <table className="table">
                        <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Min Temp</th>
                              <th scope="col">Max Temp</th>
                              <th scope="col">Wind Speed</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td id="temp_min">{this.state.temp_min}</td>
                              <td id="temp_max"></td>
                              <td id="wind_speed"></td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
                
            </div>
                <h3>Today's forecast</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Country Name:  </label>
                        <input type="text" className="form-control" value={this.state.country}  onChange={this.onChangeCountryName}/>
                    </div>
                    <div className="form-group">
                        <label>City Name:  </label>
                        <input type="text" className="form-control" value={this.state.name}  onChange={this.onChangeCityName}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Add Node server" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}