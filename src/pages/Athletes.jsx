import AthleteCard from "../components/AthleteCard"
import { useEffect , useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Athletes() {
  const [athletes, setAthletes] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/athletes`)
    .then((response) => {
      //console.log(response.data)
      setAthletes(response.data);
    })
    .catch((error) => {
      //console.log(error)
    });
  }, []);

  if (!athletes) {
    return <h3>Searching...</h3>;
  }

  return (
    <div>
      <h1>Athletes</h1>

      <div className="LinkAddAthlete">
        <Link to="/athletes/add">Add New Athlete</Link>
      </div>

      {athletes.map((eachAthlete) => {
        //console.log(eachAthlete)
        return <AthleteCard key={eachAthlete.id} athlete={eachAthlete} />;
      })}

      <Link to="/" className="Link">← Back to Home</Link>
    </div>
  );
}

export default Athletes;

//Search, Delete, Edit
//Extra: Pages
