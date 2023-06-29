import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Popularcars from "../Components/Popularcars";
import Selling from "../Components/Selling";
import Footer from "../Components/Footer";
import Sellingcars from "../Components/Sellingcars.js/Sellingcars";


function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
        title="Lets buy cars in Carzz"
        text="Choose your favrouite cars"
        buttonText="Just drive"
        url="/"
        btnClass="show"
      />
      <Popularcars />
      <Selling />
      <Sellingcars/>
      <Footer />
      

    </>
  );
}
export default Home;
