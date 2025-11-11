import { Link } from "react-router-dom";

function NotFound() {

  return (
    <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="Link">← Back to Home</Link>
    </div>
  );
}

export default NotFound;

//navigation system, Css, improve