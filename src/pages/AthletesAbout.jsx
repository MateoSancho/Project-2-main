import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function AthletesAbout() {

  const [ athlete, setAthlete] = useState(null);
  const { id } = useParams(); // Get the athlete ID from the URL

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/athletes/${id}`)
      .then((response) => {
        //console.log(response.data)
        setAthlete(response.data);
      })
      .catch((error) => {
        //console.error(error)
      });
  }, [id]);

  if (!athlete) {
    return <h3>Loading athlete details...</h3>;
  }

  return (
    <div className="athleteabout">
      <Link to="/athletes">← Back to Athletes</Link>
      <h1>{athlete.name}</h1>
      <div className="athleteinfo">
        <p><strong>Category:</strong> {athlete.category}</p>
        <p><strong>Brand ID:</strong> {athlete.brandId}</p>
      </div>
    </div>
  );
}

export default AthletesAbout;

// Cancel, Edit, Back, Brand Link, Css
