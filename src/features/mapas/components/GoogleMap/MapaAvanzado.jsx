import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import styles from './MapaAvanzado.module.css';

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "12px",
  overflow: "hidden"
};

const center = {
  lat: -34.6037, // Cambia la latitud
  lng: -58.3816  // Cambia la longitud
};

function MapaAvanzado({ apiKey }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: apiKey
  });

  if (!isLoaded) return <div>Cargando mapa...</div>;

  return (
    <div className={styles.MapaAvanzado}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        {/* Marcador */}
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
}

export default MapaAvanzado;
