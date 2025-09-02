import { useNavigate } from 'react-router'

function Home() {
  const navigate = useNavigate()

  const handleSelect = (destination: string) => {
    navigate('/budget', { state: { destination } })
  }

  return (
    <div className="centred">
      <table>
        <tbody>
          <tr>
            <td>
              <button
                className="noBackground"
                onClick={() => handleSelect('beach')}
                onKeyDown={() => handleSelect('beach')}
              >
                <img src="../../images/beach.png" alt="Beach" />
              </button>
            </td>
            <td>
              <button
                className="noBackground"
                onClick={() => handleSelect('mountain')}
                onKeyDown={() => handleSelect('mountain')}
              >
                <img src="../../images/mountain.png" alt="Mountain" />
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <button
                className="noBackground"
                onClick={() => handleSelect('forest')}
                onKeyDown={() => handleSelect('forest')}
              >
                <img src="../../images/forest.png" alt="Forest" />
              </button>
            </td>
            <td>
              <button
                className="noBackground"
                onClick={() => handleSelect('city')}
                onKeyDown={() => handleSelect('city')}
              >
                <img src="../../images/city.png" alt="City" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <p>Click your favourite landscape to start the quiz!</p>
    </div>
  )
}

export default Home
