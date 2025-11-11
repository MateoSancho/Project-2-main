import { Link } from "react-router-dom";

function Error () {
    return (
        <>  
            <p>This isn't working</p>
            <h3>we are trying to solve it</h3>
            <Link to="/" className="Link">← Back to Home</Link>
        </>
    )
}

export default Error