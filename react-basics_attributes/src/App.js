import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

const Article = () => {
  return (
    <article className="article">
      <h2 className="article__title">article title</h2>
      <label htmlFor="searchInput">input
        <input id="searchInput" name="search" type="text" />
      </label>
      <a href="https://reactjs.org/" className="article__link">link</a>
    </article>
  )
}
