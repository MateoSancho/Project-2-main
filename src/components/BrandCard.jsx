import { Link } from "react-router-dom";

function BrandCard (props) {
  return (
    <div className="Brand-card">
      <img src={`${import.meta.env.VITE_SERVER_URL}${props.brand.image}`} alt={props.brand.name} className="brand-image"/>
      <h3>{props.brand.name}</h3>
      <p>{props.brand.location}</p>
      <p>{props.brand.yearCreated}</p>
      <Link to={`/brands/${props.brand.id}`}>
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
}

export default BrandCard;