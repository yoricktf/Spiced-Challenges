import Link from "../components/Link";
import { useState } from 'react'

export default function HomePage({ test, count, lightsOff, lightsOn, onToggle }) {



  return (
    <div>
      <h1>Home</h1>
      <p>{count} light(s) are on.</p>
      <p>
        <Link onToggle={onToggle} href="/lights">All lights →</Link>
      </p>
      <p>
        <Link lightsOff={lightsOff} lightsOn={lightsOn} href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
