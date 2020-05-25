import React, { Component } from 'react'
import 'cesium/Widgets/widgets.css'

const Cesium: any = require('cesium/Cesium')

export default class CesiumViewer extends Component{
  state = {}

  componentDidMount() {
    Cesium.Ion.defaultAccessToken = 'your_access_token';
    const viewer = new Cesium.Viewer("cesiumContainer");
  }
  render() {
    return (
      <div id="cesiumContainer" />
    );
  }
}
