import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import abtpageimg from "../Assets/abtpageimg.jpg";
import Aboutus from "../Components/Aboutus";

function About() {
  return (
    <>
      <Navbar />
      <Hero cName="heroAbt" heroImg={abtpageimg} url="/" btnClass="hide" />
      <Aboutus/>

      <Footer />
    </>
  );
}
export default About;