import { Link, Outlet } from 'react-router'

function App() {
  return (
    <div>
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
