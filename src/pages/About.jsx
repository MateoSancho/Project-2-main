import { Link } from "react-router-dom";

function About() {
  const teamMember = {
      name: "Mateo",
      description: "I am a amateur web developer and gym enthusiast passionate about fitness, and more!"
    }

    return (
      <div className="about">
        <div className="about-title">
          <h1>About ME</h1>
          <p>
          This i a Website only for educational purposes. All the images 
          and data used are real and represent real athletes or brands, and 
          belong to the Tren Pedia, the best website ever about any gym 
          figure, or brand that any user know. Maybe on a Future we can 
          implement much more things, like the brand items, the social media
          links, ratings, comments, reviews, and much more. But for the moment,
          this is a little project made by me, as a gym enthusiast and Tren Twins
          Fan. 
          </p>
          <p>ㅤㅤㅤㅤㅤㅤㅤ</p>
          <p>
            This Web has all the Athletes you can ever know, and if not you can add
          them. Also with the Brands, each one has its own page with all the info you
          need, and you can delete or edit them if you want(do not delete any of the 
          Tren Twins Brands or Athletes Cards).
          </p>
          <p>ㅤㅤㅤㅤㅤㅤㅤ</p>
          <p>Enjoy this web and add all the valious knowledge that you have on you</p>
          <p>ㅤㅤㅤㅤㅤㅤㅤ</p>
        </div>

        <div className="about-info">
        <h3>{teamMember.name}</h3>
        <p>{teamMember.description}</p>
        </div>
        <p>ㅤㅤㅤㅤㅤㅤㅤ</p>
        <p>ㅤㅤㅤㅤㅤㅤㅤ</p>
        <Link to="/" className="Link">← Back to Home</Link>
      </div>
    );
  }
  
  export default About;

//Css, Improve