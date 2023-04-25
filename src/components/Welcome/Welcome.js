import MessageIcon from "../icons/MessageIcon";
import "./Welcome.scss";
import welcomeImage from "../../assets/user.png";

export default function Welcome() {
  return (
    <div className="container welcome">
      <div className="welcome__info">
        <div className="welcome__title">
          Hi, I am Maksym. A Product Designer based in City.
        </div>
        <div className="welcome__desc">
          I help businesses and companies reach their goals by designing
          user-centric digital products & interactive experiences.
        </div>
        <a href="/" className="btn welcome__btn">
          <MessageIcon />
          <span>hi@yourname.com</span>

        </a>
      </div>
      <div className="welcome__image">
        <img src={welcomeImage} alt="User" />
      </div>
    </div>
  );
}
