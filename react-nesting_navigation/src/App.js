import "./styles.css";

import { Header } from "./components/Header.jsx";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
import { Logo } from "./components/Logo";
import { Avatar } from "./components/Avatar";

export default function App() {
  return (
    <>
      <Header>
        <Logo />
        <Navigation>
          <Link href="#home">home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
