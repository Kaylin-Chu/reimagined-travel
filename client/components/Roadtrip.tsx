function Roadtrip() {
  return (
    <body className="centred">
    <h2> You should visit: </h2>
    <img className="holiday" src="../../images/Ohakune.png" alt="Ohakune"/>
    <h1> Ohakune!</h1> 
    <h2> Based on your chosen Itinerary of </h2>
    <table>
      <tr>
        <th> Destination: <img className="chosenRounded" src="../../images/mountain.png" alt="Mountain"/></th>
        <th> Budget: <img className="chosen" src="../../images/Coins.png" alt="A few loose coins"/></th>
        <th> Length: <img className="chosen" src="../../images/Weekend.png" alt="Weekend"/> </th>
      </tr>
    </table>
    </body>
  )
}

export default Roadtrip