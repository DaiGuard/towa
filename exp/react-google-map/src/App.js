import logo from './logo.svg';
import './App.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { URL } from 'url';

const request = require('request');
const querystring = require('querystring');


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Google Map API Demo
        </p>
      </header> */}
      <MyComponent />
    </div>
  );
}

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 35.69575,
  lng: 139.77521,
}

const MyComponent = () => {

  const API_KEY = process.env.React_APP_GOOGLE_MAP_API_KEY;
  const path = '35.69575,139.77521|35.79575,139.87521';

  let params = new URLSearchParams();
  params.append("path", path);
  params.append("interpolate", true);
  params.append("key", API_KEY);

  console.log(`API KEY=${API_KEY}`);

  let options = {
    url: 'https://roads.googleapis.com/v1/snapToRoads' + '?' + params.toString(),            
    // url: `https://roads.googleapis.com/v1/snapToRoads?path=${path}&interpolate=true&key=${API_KEY}`,
    method: 'GET',
    // data: {
    //   path: '35.69575,139.77521|35.79575,139.87521',
    //   interpolate: true,
    //   key: API_KEY
    // }
  }

  request(options, function(error, responce, body) {
    console.log(body);
  })

  return(
    <div>
      <p>TEST</p>
    </div>
    // <LoadScript googleMapsApiKey={API_KEY}>
    //   <GoogleMap
    //     mapContainerStyle={containerStyle}
    //     center={center}
    //     zoom={17}></GoogleMap>      
    // </LoadScript>
  );
}

export default App;
