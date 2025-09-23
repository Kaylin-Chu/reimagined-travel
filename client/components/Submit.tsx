import { useLocation } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getHoliday } from '../apiClient.ts'
import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

function Submit() {
  const location = useLocation()
  const { destination, budget, length } = location.state || {}

  const [departureLocation, setDepartureLocation] = useState('')

  const { getAccessTokenSilently } = useAuth0()

  const {
    data: holiday,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['holiday', destination, budget, length],
    queryFn: async () => getHoliday({ destination, budget, length, departureLocation: departureLocation.trim() || 'Wellington, New Zealand' }, await token),
    enabled: false, // false = fetches on button click (true)
  })

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const token = await getAccessTokenSilently()
    setDepartureLocation(e.target.value, token)
  }

  console.log(destination, budget, length, departureLocation)

  return (
    <div className="centred">
      <br/>
      <label htmlFor="locationInput">
        <h2>Where are you departing?</h2>
        <input
          type="text"
          autoComplete="address-line2"
          placeholder="Wellington, New Zealand"
          name="location"
          value={departureLocation}
          onChange={handleInputChange}
        ></input>
      </label>
      <br/>
      <br/>
      <h2>You should visit:</h2>
      <button
        onClick={() => {
          const finalLocation =
            departureLocation.trim() || 'Wellington, New Zealand'
          console.log('Final location is:', finalLocation)
          refetch()
        }}
        disabled={isLoading}
        className='submitBtn'
      >
        {isLoading ? '🤔 Thinking...' : 'Get Holiday Recommendation'}
      </button>

      {holiday && <p>{holiday}</p>}

      {isError && <p>Oops! Something went wrong. Please try again.</p>}
    </div>
  )
}

export default Submit
