import { useLocation, useNavigate } from 'react-router'

function Length() {
  const location = useLocation()
  const navigate = useNavigate()

  const {destination, budget } = location.state || {}

  const handleSelect = (length: string) => {
    navigate('/submit', {
      state: {
        destination,
        budget,
        length,
      }
    })
  }
  // const navigate = useNavigate()

  // const handleSelect = (destination: string) => {
  //   navigate('/submit', { state: { destination } })
  // }
  return (
    <div className="centred">
      <table>
        <tr>
          <td>
            <button
              className="noBackground"
              onKeyDown={() => handleSelect('weekend')}
              onClick={() => handleSelect('weekend')}
            >
              <img
                className="length"
                src="../../images/weekend.png"
                alt="weekend"
              />
            </button>
          </td>
          <td>
            <button
              className="noBackground"
              onClick={() => handleSelect('week')}
              onKeyDown={() => handleSelect('week')}
            >
              <img
                className="manualMiddle"
                src="../../images/week.png"
                alt="week"
              />
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="noBackground"
              onClick={() => handleSelect('2 weeks')}
              onKeyDown={() => handleSelect('2 weeks')}
            >
              <img
                className="length"
                src="../../images/2weeks.png"
                alt="2 weeks"
              />
            </button>
          </td>
          <td>
            <button
              className="noBackground"
              onClick={() => handleSelect('month or more')}
              onKeyDown={() => handleSelect('month or more')}
            >
              <img
                className="manualMiddleBiggerImage"
                src="../../images/month.png"
                alt="month"
              />
            </button>
          </td>
        </tr>
      </table>
      <p>How long do you want to travel for?</p>
    </div>
  )
}

export default Length
