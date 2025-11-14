import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddBrand() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [yearCreated, setYearCreated] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBrand = {
      name,
      location,
      yearCreated: Number(yearCreated),
      image: imageUrl || "/images/brands/Undefined.png",
    };

    axios.post(`${import.meta.env.VITE_SERVER_URL}/brands`, newBrand)
    .then(() => {
        //console.log("athlete added")
        navigate("/brands");
    })
    .catch((error) => {
        //console.log(error)
    });
  };

  return (
    <div className="AddBrand">
      <h1>Add New Brand</h1>

      <form onSubmit={handleSubmit} className="addBrandForm">

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
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="formGroup">
          <label>Year Created:</label>
          <input
          type="number"
            name="yearCreated"
            value={yearCreated}
            onChange={(e) => setYearCreated(e.target.value)}
            />
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

        {/* Preview the image if a URL is provided  (AI help)*/}
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
          <button type="submit" className="view-details-btn">Add Brand</button>
          <button type="button" onClick={() => navigate("/brands")} className="view-details-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddBrand;
