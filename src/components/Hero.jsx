import "./HeroStyle.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="HerpImg" src={props.heroImg} />
        <div className="hero-text">
          <h1>
            <span>{props.sp}</span>
            {props.heading}
          </h1>
          <p>{props.subh}</p>
          <a href={props.url} className={props.buttonclass}>
            {props.buttontext}
          </a>
        </div>
      </div>
    </>
  );
}
export default Hero;
