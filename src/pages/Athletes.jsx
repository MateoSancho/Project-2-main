import AthleteCard from "../components/AthleteCard"; // used to render each Project
import { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <Link to="/">← Back to Home</Link>
      <h1>Athletes</h1>

      {athletes.map((eachAthlete) => {
        //console.log(eachAthlete)
        return <AthleteCard key={eachAthlete.id} athlete={eachAthlete} />;
      })}
    </div>
  );
}

export default Athletes;

//Search, Add, Delete, Edit
//Extra: Pages
