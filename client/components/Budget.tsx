import { Link } from "react-router"

function Budget() {
  return (
    <div className="centred">
      <table>
      <tr>
        <td><Link to={`/length`}><img src="../../images/Coins.png" alt="A few loose coins"/></Link></td>
        <td><Link to={`/length`}><img src="../../images/Notes.png" alt="A few bank notes"/></Link></td>
      </tr>
      <tr>
        <td><Link to={`/length`}><img src="../../images/Bands.png" alt="Money Band"/></Link></td>
        <td><Link to={`/length`}><img src="../../images/Bags.png" alt="Money Bag"/></Link></td>
      </tr>
      </table>
      <p>Choose an image that best describes your travel budget</p>
    </div>
  )
}

export default Budget