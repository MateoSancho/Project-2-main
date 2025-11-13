import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAthlete() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brandId, setBrandId] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAthlete = {
      name,
      category,
      brandId,
      image: image || "./assets/defaultathlete.png",
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
          <label>Brand ID:</label>
          <select
            name="brandId"
            value={brandId}
            onChange={(e) => setBrandId(e.target.value)}
          >
            <option value="">Select a Brand</option>
            <option value="AA">Ferral Supplements</option>
            <option value="AB">Gymshark</option>
            <option value="AC">Breath Divnity</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="./images/athletes/athlete.png"
          />
        </div>

        <div className="formButtons">
          <button type="submit" className="view-details-btn">Add Athlete</button>
          <button type="button" onClick={() => navigate("/athletes")} className="view-details-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default AddAthlete;
