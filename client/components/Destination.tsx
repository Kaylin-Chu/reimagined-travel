import { Link } from "react-router"

function Home() {
  return (
    <div className="centred">
      <table>
      <tr>
        <td><Link to={`/budget`}><img src="../../images/beach.png" alt="Beach"/></Link></td>
        <td><Link to={`/budget`}><img src="../../images/mountain.png" alt="Mountain"/></Link></td>
      </tr>
      <tr>
        <td><Link to={`/budget`}><img src="../../images/forest.png" alt="Forest"/></Link></td>
        <td><Link to={`/budget`}><img src="../../images/city.png" alt="City"/></Link></td>
      </tr>
      </table>
      <p>Click your favourite image to start the quiz!</p>
    </div>
  )
}

export default Home
