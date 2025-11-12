import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAthlete() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAthlete = {
      name,
      location,
      year,
      image: image || "./assets/defaultbrand.png",
    };

    axios.get(`${import.meta.env.VITE_SERVER_URL}/brands`, newBrand)
    .then(() => {
        //console.log("athlete added")
        navigate("/athletes");
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
          type="text"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            />
        </div>

        <div className="formGroup">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="/images/brands/brand-name.png"
          />
        </div>

        <div className="formButtons">
          <button type="submit" className="view-details-btn">Add Brand</button>
          <button type="button" onClick={() => navigate("/brands")} className="view-details-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAthlete;
