import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>1st button</Button>
      <Button>2nd button</Button>
      <Button>3rd button</Button>
      <Button>4th button</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
