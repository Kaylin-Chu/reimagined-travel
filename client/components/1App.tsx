import { Link, Outlet } from 'react-router'
import Nav from "./Nav"

function App() {
  return (
    <div>
      <nav className="navbarLinks">
        <audio autoPlay muted loop controls>
        <source src="../../2min-lofi.wav" type="audio/mpeg" />
        <track
          kind="captions"
          src="2min-captions.vtt"
          srcLang="en"
          label="English"
          default
        />
        Your browser does not support the audio element.
      </audio>
      <Nav/>
        <Link to={'/'} className="dropbtn">
          Home
        </Link>
        <div className="dropdown">
          <button className="dropbtn"> My Account</button>
          <div className="dropdown-content">
            <a href="/PLACEHOLDER">Holiday Recs</a>
            <a href="/PLACEHOLDER">Log Out</a>
          </div>
        </div>
      </nav>
      <header> TravelAI </header>
      <Outlet />
    </div>
  )
}

export default App
