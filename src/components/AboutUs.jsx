import "./AboutStyle.css";

function AboutUs(props) {
  return (
    <div className="about-container">
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  );
}
export default AboutUs;
