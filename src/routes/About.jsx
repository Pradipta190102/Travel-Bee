import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/night.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        heading="About"
        buttonclass="hide"
      />
      <AboutUs
        heading="Our History"
        text="Travel Bee is owned and managed by Trippy .In Pvt. Ltd., a leading brand in web designing services and e-commerce solutions. Trippy .In Pvt. Ltd. is counted for its expertise in web solutions and its top ranking business portals. Our invincible expertise and rich experience has raised our spirit to reach ahead from our client's expectation. Commendable success rate of other portals managed by Travel Bee is a live paradigm of our work excellence."
      />
      <AboutUs
        heading="Our Mission"
        text="Our mission is to touch the horizon where our capabilities may successfully meet with the requirements of our clients, that too with ultimate transparency and cost-effectiveness."
      />
      <AboutUs
        heading="Our Vision"
        text="o sow the seeds of par-excellence services with customer centric approach and reap the trust of worldwide clients."
      />
      <Footer />
    </>
  );
}

export default About;
