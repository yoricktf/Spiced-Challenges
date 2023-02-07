import React from "react";
import "./styles.css";

export default function App() {
  return <Button color='red' disabled={false} text='button words' onClick={logDetails} />;
}

const logDetails = () => {
  alert('You clicked me')
}

const Button = ({ color, disabled, text, onClick }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={{ color: color }}>
      {text}
    </button>
  )
}
