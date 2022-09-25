
// import 'bootstrap/dist/css/bootstrap.css'
import '../Components_styling/Navbar_style.css'

export default function Navbar() {
  return (
    <>
    <div className="container">

<div className="container1">
  <ul>

    <li id='logo'>
      <img src="https://www.tnpgndec.com/images/logo.png?1ea92a3c4c181e2543ff351723276c24" alt="logo " id='logo_img'/>
    </li>

    <li id='heading'>
      <p>Training & Placement Cell</p>
    </li>

  </ul>
  </div>
  
  <div className="container2">
    <ul>
      <li><a href='/login'>Login</a></li>
      <li><a href='/about'>About</a></li>
      <li><a href='/genconians'>Genconian</a></li>
      <li><a href='/contact'>Contact Details</a></li>
      <li><a href='/post'>Create Post</a></li>
      <li><a href='/more'>More</a></li>
    </ul>
  </div>

</div>
       </>
  )
}
