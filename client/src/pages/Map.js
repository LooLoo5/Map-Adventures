import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Raid from "../component/Raid";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 29.73,
      lng: -95.32
    },
    zoom: 12
  };

  render() {
    return (

      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Raid
            lat={29.75}
            lng={-95.38}
          />
          <Raid
            lat={29.7}
            lng={-95.3}
          />

        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;