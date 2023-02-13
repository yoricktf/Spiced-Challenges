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
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimer(time => time + 1)
    }, 5000);

    return () => {
      clearInterval(timer)
    }
  }, [])


  useEffect(() => {
    async function getISSCoords() {
      const data = await fetch(URL)
      const dataObject = await data.json()

      setCoords({ longitude: dataObject.longitude, latitude: dataObject.latitude })
    }

    getISSCoords()

  }, [timer])





  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
      // onRefresh={getISSCoords}
      />
    </main>
  );
}
