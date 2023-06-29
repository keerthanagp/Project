import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import abtpageimg from "../Assets/abtpageimg.jpg";
import Footer from "../Components/Footer";
import Servicedata from "../Components/Servicedata";
function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="heroAbt" heroImg={abtpageimg} url="/" btnClass="hide" />
      <Servicedata />
      <Footer />
    </>
  );
}
export default Service;