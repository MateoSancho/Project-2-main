import { Link } from "react-router-dom";

function AthleteCard (props) {

  const imageUrl = props.athlete.image.startsWith('http') 
    ? props.athlete.image 
    : `${import.meta.env.VITE_SERVER_URL}${props.athlete.image}`;
  
  return (
    <div className="Athlete-card">
      <div className="card-image-container">
        <img src={imageUrl} alt={props.athlete.name} className="athlete-image" onError={(e) => {e.target.src = "/images/athletes/Undefined.png";}} onLoad={() => console.log("Image loaded successfully:", imageUrl)} />
      </div>
      <div className="card-text-content">
        <h3>{props.athlete.name}</h3>
        <p><strong>Category:</strong> {props.athlete.category}</p>
        <p><strong>Description:</strong> {props.athlete.description}</p>

        {props.athlete.yt && (
          <p className="youtube-link"><strong>YouTube:</strong><a href={props.athlete.yt} target="_blank" rel="noopener noreferrer" className="external-link">Enter Channel</a></p>
        )}

        <div className="card-buttons">
          <Link to={`/athletes/${props.athlete.id}`}>
            <button className="view-details-btn">View Details</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default AthleteCard;