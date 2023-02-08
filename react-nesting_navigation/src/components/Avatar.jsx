import { Image } from "./Image";
import avatar from "../img/avatar.jpg";

export const Avatar = () => {
  return (
    <a href="#">
      <Image src={avatar} alt='profile picture' />
    </a>
  )
};
