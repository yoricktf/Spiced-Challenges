import React from "react";
import "./styles.css";
import Card from "./components/Card";
import Title from "./components/Title";
import { USERS } from "./db";

export default function App() {
  return (
    <main className="app">
      <Title text="ClientBoard" />
      {USERS.map(user => {
        return (
          <div key={user.id} className="app__card-grid">
            <Card user={user} />
          </div>
        )
      })}
    </main>
  );
}
