import React, { Component } from "react";
import axios from "axios";
import raidIcon from "../images/raid.png";
import gymIcon from "../images/icon.png"

function loadScript(url) {
  let index = window.document.getElementsByTagName("script")[0]
  let script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

class Map extends Component {

  state = {
    raidBtn: false,
    gymBtn: false,
    latClicked: null,
    lngClicked: null,
    showInput: false,
    currentLat: null,
    currentLng: null
  };

  // let locationUpdater = navigator.geolocation.watchPosition((position) => {console.log(position);});
  // lat: position.coords.latitude, lng:position.coords.longitude

  initMap = () => {
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: this.state.currentLat, lng: this.state.currentLng },
      zoom: 12
    });


    //CONTROLS========================
    let controlDiv = document.createElement('div');
    controlDiv.style.width = "50px";
    let raidImg = document.createElement("img");
    raidImg.src = raidIcon;
    raidImg.style.width = '50px';
    raidImg.addEventListener('click', () => {
      this.handleRaid();
    });

    let gymImg = document.createElement("img");
    gymImg.src = gymIcon;
    gymImg.style.width = '50px';
    gymImg.addEventListener('click', () => {
      this.handleGym();
    });

    controlDiv.appendChild(raidImg);
    controlDiv.appendChild(gymImg);

    map.controls[window.google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
    //CONTROLS========================

    map.addListener('click', (event) =>{
      this.setState({ latClicked: event.latLng.lat() });
      this.setState({ lngClicked: event.latLng.lng() });
      gymWindow.setPosition(event.latLng)
      gymWindow.open(map);
    });


    //INFOWINDOW================
    let windowDiv = document.createElement('div');
    let nameInput = document.createElement('input');
    nameInput.placeholder = "Name";
    let nameSubmit = document.createElement('button');
    nameSubmit.textContent = "Submit";
    nameSubmit.addEventListener('click', () => {
      this.handleAddGym(nameInput.value);
    });
    windowDiv.appendChild(nameInput);
    windowDiv.appendChild(nameSubmit);

    let gymWindow = new window.google.maps.InfoWindow({
      content: windowDiv
    });
    //INFOWINDOW================

  };




  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => this.setState({ currentLat: position.coords.latitude, currentLng: position.coords.longitude },
      () => loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_KEY}&callback=initMap`)));
    window.initMap = this.initMap;
  }

  handleRaid = () => {
    console.log("handleraid");
    this.setState({ raidBtn: !this.state.raidBtn });
  };
  handleGym = () => {
    console.log("handlegym");
  };
  handleAddGym = (name) => {
    console.log(name);
    console.log(this.state.latClicked);
    console.log(this.state.lngClicked);
    // axios.get("/api/")

  };



  render() {
    return (
      <div id="map" style={{ height: '100vh' }} ></div>

    );
  }
}


export default Map;