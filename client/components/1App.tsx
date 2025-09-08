import { Link, Outlet } from 'react-router'

function App() {
  return (
    <div>
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
      <ul className="navbarLinks">
        <Link to={'/'} className="matchdropbtn">
          Home
        </Link>
        <div className="dropdown">
          <button className="dropbtn">My Account</button>
          <div className="dropdown-content">
            <a href="/PLACEHOLDER">Holiday Recs</a>
            <a href="/">Log Out</a>
          </div>
        </div>
      </ul>
      <header> TravelAI </header>
      <Outlet />
    </div>
  )
}

export default App
