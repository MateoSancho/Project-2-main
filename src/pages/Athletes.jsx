import AthleteCard from "../components/AthleteCard"
import { useEffect , useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"

function Athletes() {

  const [athletes, setAthletes] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAthletes, setFilteredAthletes] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/athletes`)
    .then((response) => {
      //console.log(response.data)
      setAthletes(response.data);
      setFilteredAthletes(response.data);
    })
    .catch((error) => {
      //console.log(error)
    });
  }, []);

  //Buscar segun letras de data
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (!athletes) return;

    if (term === "") {
      setFilteredAthletes(athletes);
    } else {
      const filtered = athletes.filter(athlete => 
        athlete.name.toLowerCase().includes(term) ||
        athlete.category.toLowerCase().includes(term)
      );
      setFilteredAthletes(filtered);
    }
  };

  if (!athletes) {
    return <h3>Searching...</h3>;
  }

  return (
    <div>
      <h1>Athletes</h1>

        <Link to="/athletes/add" className="Link">Add New Athlete</Link>

      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="search-results">
          <p>Showing {filteredAthletes.length} of {athletes.length} athletes</p>
        </div>
      </div>

      {filteredAthletes.length === 0 ? (
        <div className="no-results">
          <h3>No athletes found matching your search.</h3>
        </div>
      ) : (
        filteredAthletes.map((eachAthlete) => {
          return <AthleteCard key={eachAthlete.id} athlete={eachAthlete}/>;
        })
      )}

      <Link to="/" className="Link">← Back to Home</Link>
    </div>
  );
}

export default Athletes;

