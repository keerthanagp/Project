import "../Components/Popularcars.css";
import Popularcardata from "../Components/Popularcardata";
import images1 from "../Assets/image1.jpg";
import images2 from "../Assets/image2.jpg";
import images3 from "../Assets/image3.jpg";
import images4 from "../Assets/image4.jpg";

const Popularcars = () => {
  return (
    <div className="popularcars">
      <h1>Best Cars</h1>
      <p>There are 17 cars available in India, among which popular car models include Thar, FRONX, Nexon, Fortuner, Innova Crysta & many more. The top Indian car brands are Mahindra, Maruti Suzuki, Tata, Toyota,. Explore the list of best cars price in India and Compare cars to find the right car for you. </p>
      <Popularcardata
        className="normal"
        img1={images1}
        img2={images2}
        img3={images3}
        img4={images4}
      />
    </div>
  );
};
export default Popularcars;
