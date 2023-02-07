import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy={false} />;
}


const Smiley = ({ isHappy }) => {
  return (
    <div>
      {isHappy ? '😁' : '😭'}
    </div>
  )
}
