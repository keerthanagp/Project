import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import contactimg from "../Assets/contactimg.jpg";
import Footer from "../Components/Footer";
import Contactform from "../Components/Contactform";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="heroContact" heroImg={contactimg} url="/" />
      <Contactform />
      <Footer />
    </>
  );
}
export default Contact;