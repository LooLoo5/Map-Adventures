import React, { Component } from "react";
import axios from "axios";
import stopIcon from "../images/stop1.png";
import gymIcon from "../images/icon.png";
import raidIcon from "../images/raid.png";

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
    stopBtn: false,
    gymBtn: false,
    latClicked: null,
    lngClicked: null,
    showInput: false,
    currentLat: null,
    currentLng: null,
    gyms: [],
    raids: [],
    stops: [],
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
    let stopImg = document.createElement("img");
    stopImg.src = stopIcon;
    stopImg.style.width = '50px';
    stopImg.addEventListener('click', () => {
      this.setState({ stopBtn: !this.state.stopBtn });
      if (this.state.gymBtn) this.setState({ gymBtn: false });
    });

    let gymImg = document.createElement("img");
    gymImg.src = gymIcon;
    gymImg.style.width = '50px';
    gymImg.addEventListener('click', () => {
      this.setState({ gymBtn: !this.state.gymBtn });
      if (this.state.stopBtn) this.setState({ stopBtn: false });
    });

    controlDiv.appendChild(stopImg);
    controlDiv.appendChild(gymImg);

    map.controls[window.google.maps.ControlPosition.RIGHT_TOP].push(controlDiv);
    //CONTROLS========================

    map.addListener('click', (event) => {
      this.setState({ latClicked: event.latLng.lat() });
      this.setState({ lngClicked: event.latLng.lng() });
      if (this.state.stopBtn) {
        stopWindow.setPosition(event.latLng);
        stopWindow.open(map);
      } else if (this.state.gymBtn) {
        gymWindow.setPosition(event.latLng);
        gymWindow.open(map);
      }

    });


    //gymwindow================
    let gymDiv = document.createElement('div');
    let nameInput = document.createElement('input');
    nameInput.placeholder = "Gym Name";
    let nameSubmit = document.createElement('button');
    nameSubmit.textContent = "Submit";
    nameSubmit.addEventListener('click', () => {
      this.handleAddGym(nameInput.value);
    });
    gymDiv.appendChild(nameInput);
    gymDiv.appendChild(nameSubmit);
    let gymWindow = new window.google.maps.InfoWindow({
      content: gymDiv
    });


    let stopDiv = document.createElement('div');
    let stopInput = document.createElement('input');
    stopInput.placeholder = "Stop Name";
    let stopSubmit = document.createElement('button');
    stopSubmit.textContent = "Submit";
    stopSubmit.addEventListener('click', () => {
      this.handleAddStop(stopInput.value);
    });
    stopDiv.appendChild(stopInput);
    stopDiv.appendChild(stopSubmit);
    let stopWindow = new window.google.maps.InfoWindow({
      content: stopDiv
    });

    //stopwindow================



    //raidwindow==========================
    let raidDiv = document.createElement('div');
    let raidPokemon = document.createElement('input');
    raidPokemon.placeholder = "Pokemon (if hatched)";
    let raidTime = document.createElement('input');
    raidTime.placeholder = "Time left";
    let raidLevel = document.createElement('input');
    raidLevel.placeholder = "Raid level";
    let raidHatched = document.createElement('input');
    raidHatched.type = "checkbox";
    // raidHatched.name = "Hatched";
    let raidSubmit = document.createElement('button');
    raidSubmit.textContent = "Submit";
    raidSubmit.addEventListener('click', () => {
      this.handleAddRaid(raidPokemon.value, raidTime.value, raidLevel.value, raidHatched.checked);
    });
    raidDiv.appendChild(raidPokemon);
    raidDiv.appendChild(raidLevel);
    raidDiv.appendChild(raidTime);
    raidDiv.appendChild(raidHatched);
    raidDiv.appendChild(raidSubmit);
    let raidWindow = new window.google.maps.InfoWindow({
      content: raidDiv
    });
    //raidwindow=======================

    this.state.gyms.map(e => {
      var gymMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(e.lat, e.lng),
        icon: {
          url: gymIcon,
          scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12)
        },
        map: map
      });
      gymMarker.addListener('click', (m) => {
        this.setState({ gymClicked: e })
        raidWindow.setPosition(m.latLng)
        raidWindow.open(map);
      });
    });

    this.state.raids.map(e => {
      var raidMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(e.lat, e.lng),
        icon: {
          url: raidIcon,
          scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12)
        },
        map: map
      }); 
    });
    this.state.stops.map(e => {
      var stopMarker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(e.lat, e.lng),
        icon: {
          url: stopIcon,
          scaledSize: new window.google.maps.Size(24, 24),
          anchor: new window.google.maps.Point(12, 12)
        },
        map: map
      });
    });

  };




  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => this.setState({ currentLat: position.coords.latitude, currentLng: position.coords.longitude }));

    window.initMap = this.initMap;
    axios.get("/api/raids").then(res => { this.setState({ raids: res.data }) });
    axios.get("/api/stops").then(res => { this.setState({ stops: res.data }) });
    axios.get("/api/gyms")
      .then(res => {
        this.setState({ gyms: res.data },
          () => loadScript(`https://maps.googleapis.com/maps/api/js?key=AIzaSyBdwQv-pTAALJXxShEhd3UwS2zQ_UmBBHs&callback=initMap`));
      });
  }

  handleStopBtn = () => {
    console.log("handleStop");
    this.setState({ stopBtn: !this.state.stopBtn });
  };
  handleGymBtn = () => {
    console.log("handleGym");
    this.setState({ gymBtn: !this.state.gymBtn });
  };
  handleAddGym = (name) => {
    console.log(name);
    let data = {
      name: name,
      lat: this.state.latClicked,
      lng: this.state.lngClicked
    }

    axios.post("/api/gyms", data)
      .then(res => {
        this.setState({
          gyms: [...this.state.gyms, res.data]
        });
      });
  };

  handleAddStop = (name) => {
    console.log(name);
    let data = {
      name: name,
      lat: this.state.latClicked,
      lng: this.state.lngClicked
    }

    axios.post("/api/stops", data)
      .then(res => {
        this.setState({
          stops: [...this.state.stops, res.data]
        });
      });
  };

  handleAddRaid = (pokemon, time, level, hatched) => {
    console.log(hatched);

    let data = {
      pokemon: pokemon,
      level: level,
      hatched: hatched,
      timeLeft: time,
      lat: this.state.gymClicked.lat,
      lng: this.state.gymClicked.lng

    }
    // console.log(data);

    axios.post("/api/raids", data)
      .then(res => {
        this.setState({
          raids: [...this.state.raids, res.data]
        });
      });
  }



  render() {
    return (
      <div id="map" style={{ height: '100vh' }} ></div>

    );
  }
}


export default Map;