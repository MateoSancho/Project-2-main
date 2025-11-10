import myLogo from "../assets/Logo.png"

function Navbar() {
    return (
    <div>
        <img src={myLogo} alt="Logo" className="nav-logo" />
        <h1>Project 2</h1>
    </div>
    );
  }
  
  export default Navbar;