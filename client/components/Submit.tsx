import { useLocation } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { getHoliday } from '../apiClient.ts'

function Submit() {

  const location = useLocation()
  const { destination, budget, length } = location.state || {}

  const { data: holiday, isLoading, isError, refetch } = useQuery({
    queryKey: ['holiday', destination, budget, length],
    queryFn: () => getHoliday({destination, budget, length}),
    enabled: false,  // only fetch on button click
  })

  console.log(destination, budget, length)

  return (
    <div>
      <h2>You should visit</h2>
      <button onClick={() => refetch()} disabled={isLoading}>
        {isLoading ? '🤔 Thinking...' : 'Get Holiday Recommendation'}
      </button>

      {holiday && <p>{holiday}</p>}

      {isError && <p>Oops! Something went wrong. Try again.</p>}
    </div>
  )
}

export default Submit

