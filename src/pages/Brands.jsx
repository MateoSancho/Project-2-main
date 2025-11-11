import BrandCard from "../components/BrandCard"; // used to render each Project
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Brands() {
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/brands`)
    .then((response) => {
      //console.log(response.data)
      setBrands(response.data);
    })
    .catch((error) => {
      //console.log(error)
    });
  }, []);

  if (!brands) {
    return <h3>Searching...</h3>;
  }

  return (
    <div>
      <h1>Brands</h1>
      {brands.map((eachBrand) => {
        //console.log(eachBrand)
        return <BrandCard key={eachBrand.id} brand={eachBrand} />;
      })}

      <Link to="/" className="Link">← Back to Home</Link>

    </div>
  );
}

export default Brands;

//Search, Add, Delete, Edit
//Extra: pages
