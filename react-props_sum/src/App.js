import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={1} valueB={2} />;
}

const Sum = ({ valueA, valueB }) => {
  return (
    <div>{valueA} + {valueB} = {valueA + valueB}</div>
  )
}
