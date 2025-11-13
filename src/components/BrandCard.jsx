import { Link } from "react-router-dom";

function BrandCard (props) {
  return (
    <div className="Brand-card">
      <div className="card-image-container">
        <img src={`${import.meta.env.VITE_SERVER_URL}${props.brand.image}`} alt={props.brand.name} className="brand-image"/>
      </div>
      <div className="card-text-content">
        <h3>{props.brand.name}</h3>
        <p><strong>Location:</strong> {props.brand.location}</p>
        <p><strong>Year:</strong> {props.brand.yearCreated}</p>
        <Link to={`/brands/${props.brand.id}`}>
          <button className="view-details-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
}

export default BrandCard;