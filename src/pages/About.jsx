function About() {
  const teamMember = {
      name: "Mateo",
      description: "I don't know"
    }

    return (
      <div>
      <h1>About ME</h1>
      
      <section>
        <h2>Project 2</h2>
        <p>
          Welcome to Project 2 - where great knowledge meets great people. 
          Our info management system helps efficiently to gym enthusiasts
          learn about epic and mega important gym characters and brands.
        </p>
      </section>

      <section>
        <h2>ME</h2>
        <div>
            <h3>{teamMember.name}</h3>
            <p>{teamMember.description}</p>
        </div>
      </section>
    </div>
    );
  }
  
  export default About;