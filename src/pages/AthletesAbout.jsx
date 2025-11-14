import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

function AthletesAbout() {

  const [athlete, setAthlete] = useState(null);
  const [brand, setBrand] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brandId, setBrandId] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [youtube, setYoutube] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/athletes/${params.id}`)
    .then((response) => {
      //console.log(response.data)
      setAthlete(response.data);
      setName(response.data.name);
      setCategory(response.data.category);
      setBrandId(response.data.brandId);
      setImage(response.data.image);
      setDescription(response.data.description || ""); 
      setYoutube(response.data.yt || "");

      // Cargar datos de la marca usando el brandId del atleta
      if (response.data.brandId) {
        axios.get(`${import.meta.env.VITE_SERVER_URL}/brands/${response.data.brandId}`)
        .then((brandResponse) => {
          setBrand(brandResponse.data);
        })
        .catch((error) => {
          console.error("Error loading brand:", error);
        });
      }
    })
    .catch((error) => {
      //console.error(error)
    });
  }, [params.id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const updatedAthlete = {
      name,
      category,
      brandId,
      image,
      description,
      yt: youtube,
    };

    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/athletes/${params.id}`,updatedAthlete);
      setAthlete(updatedAthlete);
      setIsEditing(false);
    } catch (error) {
      //console.log(error)
    }
  };

  const deleteAthlete = () => {
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/athletes/${params.id}`)
    .then(() => {
      // Redirect to athletes list after successful delete
      navigate("/athletes")
    })
    .catch((error) => {
      //console.log(error)
    });
  };

  if (!athlete) {
    return <h3>Loading athlete details...</h3>;
  }

  // Fix image URL for display(Ai help also)
  const athleteImageUrl = athlete.image.startsWith('http') 
    ? athlete.image 
    : `${import.meta.env.VITE_SERVER_URL}${athlete.image}`;

  if (isEditing) {
    return (
      <div className="athleteabout">
        <h1>Edit Athlete</h1>
        
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
            <label>Description:</label>
            <textarea
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            />
          </div>

          <div className="formGroup">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>

          <div className="formGroup">
            <label>Brand ID:</label>
            <select
              name="brandId"
              value={brandId}
              onChange={(e) => setBrandId(e.target.value)}
              required
            >
              <option value="AA">Ferral Supplements</option>
              <option value="AB">Gymshark</option>
              <option value="AC">Breath Divnity</option>
              <option value="AD">Youngla</option>
              <option value="AE">Vanquish</option>
              <option value="AF">PR Lifestyle</option>
              <option value="AG">Unknown</option>
            </select>
          </div>

          <div className="formGroup">
            <label>YouTube URL:</label>
            <input
              type="url"
              name="youtube"
              value={youtube}
              onChange={(e) => setYoutube(e.target.value)}
              placeholder="https://youtube.com/@channel"
            />
          </div>

          <div className="formGroup">
            <label>Image URL:</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="/images/athletes/athlete.png"
            />
          </div>

          <div className="form-buttons">
            <button type="submit" className="view-details-btn">Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)} className="view-details-btn">Cancel</button>
          </div>
        </form>

        <Link to="/athletes" className="Link">← Back to Athletes</Link>
      </div>
    );
  }

  return (
    <div className="athleteabout">
      <img src={athleteImageUrl} alt={athlete.name} className="athlete-detail-image" onError={(e) => {e.target.src = `${import.meta.env.VITE_SERVER_URL}/images/athletes/Undefined.png`}}/>
      <h1>{athlete.name}</h1>
      <div className="athleteinfo">
        <p><strong>Category:</strong> {athlete.category}</p>
         <p><strong>Description:</strong> {athlete.description}</p>
        <p><strong>Brand:</strong>{" "} 
          {brand ? (
            <Link to={`/brands/${brand.id}`} className="brand-link">{brand.name}</Link>
          ) : ( 
            <span>Loading brand...</span> //Mensaje para mostrar mientras carga 
        )} </p>

        {athlete.yt && (
        <p><strong>YouTube Channel:</strong><a href={athlete.yt} target="_blank" rel="noopener noreferrer" className="external-link">Watch Content</a></p>
        )}

        <div className="action-buttons">
          <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Athlete</button>
          <button onClick={deleteAthlete} className="delete-btn">Delete Athlete</button>
        </div>
      </div>
      <Link to="/athletes" className="Link">← Back to Athletes</Link>
    </div>
  );
}

export default AthletesAbout;