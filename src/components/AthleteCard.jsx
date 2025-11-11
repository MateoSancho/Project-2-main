import { Link } from "react-router-dom";

function AthleteCard (props) {
  return (
    <div className="Athlete-card">
      <h3>{props.athlete.name}</h3>
      <p>{props.athlete.category}</p>
      <Link to={`/athletes/${props.athlete.id}`}>
        <button className="view-details-btn">View Details</button>
      </Link>
    </div>
  );
}

export default AthleteCard;