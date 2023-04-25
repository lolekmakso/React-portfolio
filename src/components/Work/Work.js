import ArrowIcon from "../icons/ArrowIcon";
import "./Work.scss";
import WorkImage1 from "../../assets/work1.png";
import WorkImage2 from "../../assets/work2.png";
import WorkImage3 from "../../assets/work3.png";
import WorkImage4 from "../../assets/work4.png";

export default function Work() {
  return (
    <div className="container work">
      <div className="work__selection">
        <ArrowIcon />
        <span className="work__text">Featured Work</span>
      </div>

      <div className="work__images">
        <div className="work__left-img">
          <div className="work__img">
            <img src={WorkImage1} alt="Work" />
            <div className="work__litter"><a href="/">InVersion</a></div>
          </div>
          <div className="work__img">
            <img src={WorkImage3} alt="Work" />
            <div className="work__litter"><a href="/">InVersion</a></div>
          </div>
        </div>

        <div className="work__right-img">
          <div className="work__img">
            <img src={WorkImage2} alt="Work" />
            <div className="work__litter"><a href="/">InVersion</a></div>
          </div>
          <div className="work__img">
            <img src={WorkImage4} alt="Work" />
            <div className="work__litter"><a href="/">InVersion</a></div>
          </div>
        </div>
      </div>
      .
    </div>
  );
}
