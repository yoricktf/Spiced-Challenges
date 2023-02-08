import { Image } from "./Image";
import logo from "../img/logo.jpg";

export const Logo = () => {
  return (
    <a href="#">
      <Image src={logo} alt='site logo' />
    </a>
  )
};
