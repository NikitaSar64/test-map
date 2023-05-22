import { MapContainer, TileLayer} from 'react-leaflet';
import { CustomMarker } from './components';

import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';


const startPosition = [55.75711, 37.61504];

export const Map = () => {

    return (
        <MapContainer center={startPosition} zoom={13} scrollWheelZoom={true} className={styles.map}>
            <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CustomMarker/>
        </MapContainer>
    )
}