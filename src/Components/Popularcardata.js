import { Component } from "react";
import "../Components/Popularcars.css";

class Popularcardata extends Component {
  render() {
    return (
      <div className="firstpopularcars">
        <div className="images">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
          <img alt="img" src={this.props.img3} />
          <img alt="img" src={this.props.img4} />
        </div>
      </div>
    );
  }
}
export default Popularcardata;
