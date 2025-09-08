import { useLocation } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getHoliday } from '../apiClient.ts'
import { useState } from 'react'

function Submit() {
  const location = useLocation()
  const { destination, budget, length } = location.state || {}

  const [departureLocation, setDepartureLocation] = useState('')

  const {
    data: holiday,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['holiday', destination, budget, length],
    queryFn: () => getHoliday({ destination, budget, length, departureLocation: departureLocation.trim() || 'Wellington, New Zealand' }),
    enabled: false, // false = fetches on button click (true)
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDepartureLocation(e.target.value)
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
