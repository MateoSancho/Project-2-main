import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAthlete() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brandId, setBrandId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/brands`)
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => {
        //console.log("Error fetching brands:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAthlete = {
      name,
      category,
      brandId,
      image: imageUrl || "/images/athletes/Undefined.png",
    };

    axios.post(`${import.meta.env.VITE_SERVER_URL}/athletes`, newAthlete)
    .then(() => {
        //console.log("athlete added")
        navigate("/athletes");
    })
    .catch((error) => {
        //console.log(error)
    });
  };

  return (
    <div className="AddAthlete">
      <h1>Add New Athlete</h1>

      <form onSubmit={handleSubmit} className="addAthleteForm">

        <div className="formGroup">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>Brand:</label>
          <select
            name="brandId"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
          >
            <option value="">Select a Brand</option>
            {brands.map(brand => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="formGroup">
          <label>Image URL:</label>
          <input
            type="url"
            name="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Preview the image if a URL is provided */}
        {imageUrl && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img 
              src={imageUrl} 
              alt="Preview" 
              style={{ 
                maxWidth: "200px", 
                maxHeight: "200px",
                borderRadius: "8px",
                marginTop: "10px"
              }} 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}

        <div className="formButtons">
          <button type="submit" className="view-details-btn">Add Athlete</button>
          <button type="button" onClick={() => navigate("/athletes")} className="view-details-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAthlete;
