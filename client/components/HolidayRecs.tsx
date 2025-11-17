import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
function HolidayRecs() {
  return (
    <body className="centred">
      <h2> Your previous reccomendations! </h2>

      <IfAuthenticated></IfAuthenticated>
      <IfNotAuthenticated></IfNotAuthenticated>
    </body>
  )
}

export default HolidayRecs
