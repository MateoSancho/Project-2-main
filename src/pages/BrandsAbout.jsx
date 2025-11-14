import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function BrandsAbout() {

  const [brand, setBrand] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [yearCreated, setYearCreated] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/brands/${id}`)
    .then((response) => {
      //console.log(response.data)
      setBrand(response.data);
      setName(response.data.name);
      setLocation(response.data.location);
      setYearCreated(response.data.yearCreated);
      setImage(response.data.image);
    })
    .catch((error) => {
      //console.error(error)
    });
  }, [id]);

   const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedBrand = {
      name,
      location,
      yearCreated: Number(yearCreated),
      image,
    };

    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/brands/${id}`, updatedBrand);
      setBrand(updatedBrand);
      setIsEditing(false);
    } catch (error) {
      console.log("Error updating brand:", error);
    }
  };

  if (!brand) {
    return <h3>Loading brand details...</h3>;
  }

  //Fix image URL for display (Ai help)
  const brandImageUrl = brand.image.startsWith('http') 
    ? brand.image 
    : `${import.meta.env.VITE_SERVER_URL}${brand.image}`;

  if (isEditing) {
    return (
      <div className="brandabout">
        <h1>Edit Brand</h1>
        
        <form onSubmit={handleFormSubmit} className="edit-form">
          <div className="formGroup">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Year Created:</label>
            <input
              type="number"
              name="yearCreated"
              value={yearCreated}
              onChange={(e) => setYearCreated(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="/images/brands/brand.png"
            />
          </div>

          {/* Image preview in edit mode */}
          {image && (
            <div className="image-preview">
              <p>Image Preview:</p>
              <img 
                src={image.startsWith('http') ? image : `${import.meta.env.VITE_SERVER_URL}${image}`} 
                alt="Preview" 
                style={{ 
                  maxWidth: "200px", 
                  maxHeight: "200px",
                  borderRadius: "8px",
                  marginTop: "10px"
                }} 
                onError={(e) => {
                  console.log("Preview image failed to load");
                  e.target.style.display = 'none';
                }}
              />
            </div>
          )}

          <div className="form-buttons">
            <button type="submit" className="view-details-btn">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)} className="view-details-btn">Cancel</button>
          </div>
        </form>

        <Link to="/brands" className="Link">← Back to Brands</Link>
      </div>
    );
  }

  return (
    <div className="brandabout">
       <img src={brandImageUrl} alt={brand.name} className="brand-detail-image"onError={(e) => {e.target.src = `${import.meta.env.VITE_SERVER_URL}/images/brands/Undefined.png`}}/>
      <h1>Brands About</h1>
      <div className="brandinfo">
        <p><strong>Name:</strong> {brand.name}</p>
        <p><strong>Location:</strong> {brand.location}</p>
        <p><strong>Year of creation:</strong> {brand.yearCreated}</p>
        <p><strong>Brand ID:</strong> {brand.id}</p>
      </div>

      <Link to="/brands" className="Link">← Back to Brands</Link>

    </div>
  );
}

export default BrandsAbout;
