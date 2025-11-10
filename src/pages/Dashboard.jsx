import { Link } from "react-router-dom";
import athleteImage from "../assets/athlete-img.jpg"; // You can replace these
import brandImage from "../assets/brand-img.jpg"; // with your actual images
import aboutImage from "../assets/about-img.jpg";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>MAIN PAGE</h1>
      <p>The worlds best page ever :)</p>

      <div className="sections-container">
        {/* Athletes Section */}
        <div className="section-box">
          <div className="image-container">
            <img src={athleteImage} className="section-image" />
          </div>
          <div className="content-container">
            <h2 className="section-title">Athletes</h2>
            <h3 className="section-d">The best of the best, here are the top gym influencers and athletes.</h3>
            <Link to="/athletes" className="section-btn">See Athletes</Link>
          </div>
        </div>

        {/* Brands Section */}
        <div className="section-box">
          <div className="image-container">
            <img src={brandImage} className="section-image" />
          </div>
          <div className="content-container">
            <h2 className="section-title">Brands</h2>
            <h3 className="section-d">The top gym brands of supplements and clothing</h3>
            <Link to="/brands" className="section-btn">See Brands</Link>
          </div>
        </div>

        {/* About Section */}
        <div className="section-box">
          <div className="image-container">
            <img src={aboutImage} className="section-image"/>
          </div>
          <div className="content-container">
            <h2 className="section-title">About US</h2>
            <h3 className="section-d">I am ME, you don't really want to know anything about me, or my life.</h3>
            <Link to="/about" className="section-btn"> Don't click </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
