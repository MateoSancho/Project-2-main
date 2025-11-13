import BrandCard from "../components/BrandCard"; // used to render each Project
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Brands() {
  const [brands, setBrands] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBrands, setFilteredBrands] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/brands`)
    .then((response) => {
      //console.log(response.data)
      setBrands(response.data);
      setFilteredBrands(response.data);
    })
    .catch((error) => {
      //console.log(error)
    });
  }, []);

  // Función para manejar la búsqueda
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (!brands) return;

    if (term === "") {
      setFilteredBrands(brands);
    } else {
      const filtered = brands.filter(brand => 
        brand.name.toLowerCase().includes(term) ||
        brand.location.toLowerCase().includes(term) ||
        brand.yearCreated.toString().includes(term)
      );
      setFilteredBrands(filtered);
    }
  };

  if (!brands) {
    return <h3>Searching...</h3>;
  }

  return (
    <div>
      <h1>Brands</h1>

      <Link to="/brands/add" className="Link">Add New Brand</Link>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name, location or year"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
        <div className="search-results">
          <p>Showing {filteredBrands.length} of {brands.length} brands</p>
        </div>
      </div>

      {filteredBrands.length === 0 ? (
        <div className="no-results">
          <h3>No brands found matching your search.</h3>
        </div>
      ) : (
        filteredBrands.map((eachBrand) => {
          return <BrandCard key={eachBrand.id} brand={eachBrand} />;
        })
      )}

      <Link to="/" className="Link">← Back to Home</Link>

    </div>
  );
}

export default Brands;
