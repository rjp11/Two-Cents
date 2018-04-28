import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyBYjIBKriO5h3LF6jDhPUxcHK0bQn6grNA&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `800px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
    // coord_lat: this.props.coord_lat,
    // coord_long: this.props.coord_long,
    // zoom: this.props.zoom
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={11}
    defaultCenter={{ lat: 41.88, lng: -87.62}}>
    {props.isMarkerShown && <Marker position={{ lat: 41.88, lng: -87.62 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default MyMapComponent;