import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    { id: 1, name: "Living Romm", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ];

  const [lights, setLights] = useState(initialLights);
  const [count, setCount] = useState(0);

  useEffect(() => {
    function countLights() {
      let count = 0;
      for (let element of lights) {
        console.log(element);
        element.isOn === true ? count++ : "";
      }
      setCount(count);
    }
    countLights();
  }, [lights]);

  function handleToggle(id) {
    setLights(
      lights.map((light) => {
        return light.id === id ? { ...light, isOn: !light.isOn } : light;
      })
    );
  }

  function switchAllLightsOn() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: true };
      })
    );
  }

  function switchAllLightsOff() {
    setLights(
      lights.map((light) => {
        return { ...light, isOn: false };
      })
    );
  }

  return (
    <Layout isDimmed={count === 0 ? true : false}>
      <GlobalStyle />
      <Component
        test={lights}
        count={count}
        lightsOff={switchAllLightsOff}
        lightsOn={switchAllLightsOn}
        onToggle={handleToggle}
        lights={lights}
        {...pageProps}
      />
    </Layout>
  );
}
