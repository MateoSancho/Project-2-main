import { Link } from "react-router-dom";

function BrandCard (props) {

  const imageUrl = props.brand.image.startsWith('http') 
    ? props.brand.image 
    : `${import.meta.env.VITE_SERVER_URL}${props.brand.image}`;

  return (
    <div className="Brand-card">
      <div className="card-image-container">
        <img src={imageUrl} alt={props.brand.name} className="brand-image" onError={(e) => {e.target.src = "/images/brands/Undefined.png"}} onLoad={() => console.log("Brand image loaded successfully:", imageUrl)}/>
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