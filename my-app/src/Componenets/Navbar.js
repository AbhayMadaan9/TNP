
// import 'bootstrap/dist/css/bootstrap.css'
import '../Components_styling/Navbar_style.css'

export default function Navbar() {
  return (
    <>
    <div className="container">

      <div className="container1">
        <ul>

          <li id='logo'>
            <img src="logo.png" alt="logo " />
          </li>

          <li id='heading'>
            <p>Training & Placement Cell</p>
          </li>

        </ul>
        </div>
        
        <div className="container2">
          <ul>
            <li><a href='/'>Login</a></li>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Genconian</a></li>
            <li><a href='/'>Contact Details</a></li>
            <li><a href='/'>More</a></li>
          </ul>
        </div>

      </div>

    </>
  )
}
