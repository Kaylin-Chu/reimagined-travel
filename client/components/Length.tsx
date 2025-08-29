import { Link } from "react-router"

function Length() {
  return (
    <div className="centred">
      <table>
      <tr>
        <td><Link to={`/Roadtrip`}><img className="length" src="../../images/weekend.png" alt="weekend"/></Link></td>
        <td><Link to={`/PLACEHOLDER`}><img className="manualMiddle" src="../../images/week.png" alt="week"/></Link></td>
      </tr>
      <tr>
        <td><Link to={`/PLACEHOLDER`}><img className="length" src="../../images/2weeks.png" alt="2 weeks"/></Link></td>
        <td><Link to={`/PLACEHOLDER`}><img className="manualMiddleBiggerImage" src="../../images/month.png" alt="month"/></Link></td>
      </tr>
      </table>
      <p>How long do you want to travel for?</p>
    </div>
  )
}

export default Length