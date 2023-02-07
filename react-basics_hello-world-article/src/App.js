import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}


const HelloWorldArticle = () => {
  return (
    <article>
      <h1>heading</h1>
      <p>this is a paragraph</p>
    </article>
  )
}
