import { Link } from "react-router-dom";

function AthleteCard (props) {

  const handleDelete = () => {
    props.onDelete(props.athlete.id);
  }
  
  return (
    <div className="Athlete-card">
      <div className="card-image-container">
        <img src={`${import.meta.env.VITE_SERVER_URL}${props.athlete.image}`} alt={props.athlete.name} className="athlete-image"/>
      </div>
      <div className="card-text-content">
        <h3>{props.athlete.name}</h3>
        <p><strong>Category:</strong> {props.athlete.category}</p>
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