import { useState } from 'react';

import { Marker, useMapEvents } from 'react-leaflet';
import { Icon } from 'leaflet';

import defaultMarkerIcon from '@icons/markers/default-marker-test.png';


const newMarker = new Icon({
    iconUrl: defaultMarkerIcon,
    iconSize: [22, 42]
});

export const CustomMarker = () =>  {
    const [coordinates, setCoordinates] = useState([]);
  
    useMapEvents({
      click: (e) => {
        setCoordinates((prevValue) => [...prevValue, [e.latlng.lat, e.latlng.lng]]);
      },
    })
  
    return coordinates.length == 0 ? null : (
        coordinates.map((coordinate, index) => <Marker key={index} position={coordinate} icon={newMarker}/>)
    )
}