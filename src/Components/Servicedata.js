import "./ServiceStyle.css";

function Servicedata() {
  return (
    <>
      <div className="servicepage">
        <h1>Used & New Car Loan, Get Best EMI for Auto Loan - Carzz</h1>
        <p>
          Get up to 90% financing from leading banks for used car and new car at
          best Interest Rates, EMI. Apply online in a few simple steps and get
          easy car loan approval for your dream car purchase.
        </p>
      </div>
      <h2>Looking for Car Loan?</h2>
      <div className="loansection">
        <form>
          <input placeholder="Select your car" />
          <input placeholder="Select your city" />
          <input placeholder="Enter your name" />
          <input placeholder="Mobile number" />
          <button>Get Started</button>
          <h6>
            By proceeding ahead you agree to Carzz Visitor Agreement, Privacy
            Policy and Terms and Conditions. This site is protected by reCAPTCHA
            and Google Terms of Service apply
          </h6>
        </form>
        <div className="banks">
          <h1>Our Leading Partner</h1>
          <p>Axis Bank</p>
          <p>Bank of Baroda</p>
          <p>HDB Bank</p>
          <p>ICICI Bank</p>
          <p>Yes Bank</p>
          <p>Union Bank</p>
          <p>HDFC bank</p>
        </div>
      </div>
    </>
  );
}
export default Servicedata;
