function About() {
  const teamMember = {
      name: "Mateo",
      description: "I don't know"
    }

    return (
      <div className="about">
        <div className="about-title">
          <h1>About ME</h1>
          <p>
          Welcome to Project 2 - where great knowledge meets great people. 
          Our info management system helps efficiently to gym enthusiasts
          learn about epic and mega important gym characters and brands.
          </p>
        </div>

        <div className="about-info">
        <h3>{teamMember.name}</h3>
        <p>{teamMember.description}</p>
        </div>
      </div>
    );
  }
  
  export default About;

//Css, Improve