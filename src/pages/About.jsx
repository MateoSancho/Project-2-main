import { Link } from "react-router-dom";

function About() {
  const teamMember = {
    name: "Mateo",
    role: "Full Stack Developer & Gym Enthusiast",
    description: "I'm an amateur web developer and gym enthusiast passionate about fitness, technology, and creating amazing digital experiences. When I'm not coding, you'll find me at the gym or researching the latest fitness trends!",
    skills: ["React", "JavaScript", "CSS", "Fitness Training", "UI/UX Design", "API Integration"]
  }

  return (
    <div className="about-container">
      <div className="about-hero">
        <h1 className="about-main-title">About ME</h1>
        <p className="about-subtitle">
          Building the Ultimate Fitness Knowledge Platform
        </p>
      </div>

      <div className="about-content">
        <div className="about-main-section">
          <div className="about-card">
            <h2 className="about-card-title">🎯 Project Mission</h2>
            <p className="about-card-text">
              This is a website built for educational purposes. All the images 
              and data used are real and represent real athletes or brands, and 
              belong to the Tren Pedia ecosystem - the ultimate resource about any gym 
              figure or brand that any user should know.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card-title">🚀 Future Vision</h2>
            <p className="about-card-text">
              Maybe in the future we can implement much more features like brand items, 
              social media links, ratings, comments, reviews, and much more. But for now,
              this is a passion project made by me, as a gym enthusiast and Tren Twins fan.
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card-title">💪 What You'll Find Here</h2>
            <p className="about-card-text">
              This web has all the athletes you could ever want to know about, and if 
              someone's missing, you can add them! Each brand has its own detailed page 
              with all the information you need, and you can edit or delete entries 
              (though we recommend not deleting any Tren Twins-related content!).
            </p>
          </div>

          <div className="about-card">
            <h2 className="about-card-title">🎉 Join the Community</h2>
            <p className="about-card-text">
              Enjoy this web and contribute all the valuable fitness knowledge that you have! 
              Together, we're building the most comprehensive fitness database on the web.
            </p>
          </div>
        </div>

        <div className="about-sidebar">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                💪
              </div>
              <div className="profile-info">
                <h3 className="profile-name">{teamMember.name}</h3>
                <p className="profile-role">{teamMember.role}</p>
              </div>
            </div>
            
            <div className="profile-description">
              <p>{teamMember.description}</p>
            </div>

            <div className="profile-skills">
              <h4 className="skills-title">Skills & Expertise</h4>
              <div className="skills-grid">
                {teamMember.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>

            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Gym Passion</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Code Mode</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Protein Shakes</span>
              </div>
            </div>
          </div>

          <div className="project-info">
            <h4 className="project-title">📊 Project Stats</h4>
            <div className="project-stats">
              <div className="project-stat">
                <span className="project-stat-number">20+</span>
                <span className="project-stat-label">Athletes</span>
              </div>
              <div className="project-stat">
                <span className="project-stat-number">8+</span>
                <span className="project-stat-label">Brands</span>
              </div>
              <div className="project-stat">
                <span className="project-stat-number">∞</span>
                <span className="project-stat-label">Possibilities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h3 className="cta-title">Ready to Explore?</h3>
        <p className="cta-subtitle">Start your fitness knowledge journey today!</p>
        <div className="cta-buttons">
          <Link to="/athletes" className="cta-btn primary">Browse Athletes</Link>
          <Link to="/brands" className="cta-btn secondary">Explore Brands</Link>
        </div>
      </div>

      <div className="about-footer">
        <Link to="/" className="back-home-btn">← Back to Home Gym</Link>
      </div>
    </div>
  );
}

export default About;