import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function BrandsAbout() {
  const [brand, setBrand] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/brands/${id}`)
    .then((response) => {
      //console.log(response.data)
      setBrand(response.data);
    })
    .catch((error) => {
      //console.error(error)
    });
  }, [id]);

  if (!brand) {
    return <h3>Loading brand details...</h3>;
  }

  return (
    <div className="brandabout">
      <Link to="/brands">← Back to Athletes</Link>
      <h1>Brands About</h1>
      <div className="brandinfo">
        <p><strong>Name:</strong> {brand.name}</p>
        <p><strong>Location:</strong> {brand.location}</p>
        <p><strong>Year of creation:</strong> {brand.yearCreated}</p>
        <p><strong>Brand ID:</strong> {brand.brandId}</p>
      </div>
    </div>
  );
}

export default BrandsAbout;

// Cancel, Edit, Brand Link, Css
