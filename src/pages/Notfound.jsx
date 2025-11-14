import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        {/* Animated 404 */}
        <div className="error-code">
          <span className="error-digit">4</span>
          <span className="error-icon">🏋️</span>
          <span className="error-digit">4</span>
        </div>

        <h1 className="not-found-title">Page Not Found</h1>
        
        <div className="not-found-message">
          <p className="main-message">
            <strong>Oops! This page is taking a rest day! 🏃‍♂️</strong>
          </p>
          <p className="sub-message">
            The page you're looking for seems to have skipped leg day and disappeared. 
            It might be doing cardio somewhere else or getting a protein shake.
          </p>
          <div className="gym-jokes">
            <p>💪 <em>"This page is weaker than my first bench press attempt!"</em></p>
            <p>🥛 <em>"Even our pre-workout can't find this page!"</em></p>
          </div>
        </div>

        <div className="not-found-actions">
          <Link to="/" className="cta-btn primary">
            🏠 Back to Home Gym
          </Link>

        </div>

        <div className="fun-stats">
          <div className="stat-item">
            <span className="stat-number">0</span>
            <span className="stat-label">reps completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">404</span>
            <span className="stat-label">errors lifted</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">gainz potential</span>
          </div>
        </div>

        <div className="motivational-quote">
          <blockquote>
            "The only bad workout is the one that didn't happen. 
            But this page? This page definitely didn't happen."
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
