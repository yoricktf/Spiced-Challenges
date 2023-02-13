import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0.00000000,
    latitude: 0.00000000,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords()
    }, 5000);

    return () => {
      clearInterval(timer)
    }
  }, [])

  async function getISSCoords() {
    const data = await fetch(URL)
    const dataObject = await data.json()

    setCoords(dataObject)
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
