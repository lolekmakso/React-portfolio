import "./Footer.scss";
import BehanceIcon from "../icons/soc/BehanceIcon";
import DribbleIcon from "../icons/soc/DribbleIcon";
import LinkedinIcon from "../icons/soc/LinkedinIcon";
import TwitterIcon from "../icons/soc/TwitterIcon";
import WhatsappIcon from "../icons/soc/WhatsappIcon";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <div className="footer__text">Made by <span>Maksym</span> — Copyright 2021</div>
        <div className="footer__soc">
          <div className="footer__icon">
            <a href="/"><WhatsappIcon /></a>
          </div>

          <div className="footer__icon">
          <a href="/"><DribbleIcon /></a>
          </div>

          <div className="footer__icon">
          <a href="/"><LinkedinIcon /></a>
          </div>

          <div className="footer__icon">
          <a href="/"> <TwitterIcon /></a>
          </div>

          <div className="footer__icon">
          <a href="/"><BehanceIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
