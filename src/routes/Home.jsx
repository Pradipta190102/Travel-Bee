import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        sp="Your"
        heroImg="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=811&q=80"
        heading=" Journey Your Story."
        subh="Choose Your Favourite Destination."
        buttontext="Travel Plan for Travel Bee."
        url="/"
        buttonclass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
