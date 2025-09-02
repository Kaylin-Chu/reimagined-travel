import { useLocation, useNavigate } from 'react-router'

function Budget() {
  const location = useLocation()
  const navigate = useNavigate()

  const destination = location.state?.destination

  const handleSelect = (budget: string) => {
    navigate('/length', {
      state: {
        destination,
        budget,
      }
    })
  }
  
  return (
    <div className="centred">
      <table>
        <tbody>
          <tr>
            <td>
              <button className="noBackground"
                onClick={() => handleSelect('no or very small budget')}
                onKeyDown={() => handleSelect('no or very small budget')}
              >
                <img src="../../images/Coins.png" alt="A few loose coins" />
              </button>
            </td>
            <td>
              <button className="noBackground"
                onClick={() => handleSelect('small budget')}
                onKeyDown={() => handleSelect('small budget')}
              >
                <img
                  src="../../images/Notes.png"
                  alt="A few bank notes"
                />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button className="noBackground"
                onClick={() => handleSelect('medium budget')}
                onKeyDown={() => handleSelect('medium budget')}
              >
                <img
                  src="../../images/Bands.png"
                  alt="Money Band"
                />
              </button>
            </td>
            <td>
              <button className="noBackground"
                onClick={() => handleSelect('large budget')}
                onKeyDown={() => handleSelect('large budget')}
              >
                <img
                  src="../../images/Bags.png"
                  alt="Money Bag"
                />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Choose an image that best describes your travel budget</p>
    </div>
  )
}

export default Budget
