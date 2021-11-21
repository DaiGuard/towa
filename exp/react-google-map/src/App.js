import logo from './logo.svg';
import './App.css';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

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

  return(
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}></GoogleMap>      
    </LoadScript>
  );
}

export default App;
