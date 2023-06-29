import "../Components/FooterStyle.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="top">
        <div>
          <h1>Carzz</h1>
          <p>Choose your favroite car</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-square-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Top City</h4>
          <a href="/">Chennai</a>
          <a href="/">New Delhi</a>
          <a href="/">Bangalore</a>
          <a href="/">Kolkata</a>
        </div>
        <div>
          <h4>Popular search</h4>
          <a href="/">Carzz Pricing</a>
          <a href="/">Vehicle transfer</a>
          <a href="/">Sell used car</a>
          <a href="/">Used car valuation</a>
        </div>
        <div>
          <h4>Useful Links</h4>
          <a href="/">Contact us</a>
          <a href="/">Security</a>
          <a href="/">Need a loan</a>
          <a href="/">Privacy policy</a>
        </div>
        <div>
          <h4>Products</h4>
          <a href="/">Maruthi</a>
          <a href="/">Mahendra</a>
          <a href="/">suzuki</a>
          <a href="/">Hondai</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
