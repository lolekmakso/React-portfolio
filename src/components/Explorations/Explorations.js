
import "./Explorations.scss";
import ExplorationsImage1 from "../../assets/visual1.png";
import ExplorationsImage2 from "../../assets/visual2.png";
import ExplorationsImage3 from "../../assets/visual3.png";
import ExplorationsImage4 from "../../assets/visual4.png";
import ExplorationsImage5 from "../../assets/visual5.png";
import ExplorationsImage6 from "../../assets/visual6.png";

export default function Explorations() {
  return (
    <div className="container explorations">
        <div className="title">Visual Explorations</div>
        <div className="explorations__images">
            <a href="/" className="explorations__img">
            <img src={ExplorationsImage1} alt="Explorations" />
            </a>

            <a href="/" className="explorations__img">
            <img src={ExplorationsImage2} alt="Explorations" />
            </a>

            <a href="/" className="explorations__img">
            <img src={ExplorationsImage3} alt="Explorations" />
            </a>

            <a href="/" className="explorations__img">
            <img src={ExplorationsImage4} alt="Explorations" />
            </a>

            <a href="/" className="explorations__img">
            <img src={ExplorationsImage5} alt="Explorations" />
            </a>

            <a href="/" className="explorations__img">
            <img src={ExplorationsImage6} alt="Explorations" />
            </a>
        </div>
    </div>
  );
}