
import { useQuery } from '@tanstack/react-query'
import { useAuth0 } from '@auth0/auth0-react'

export default function Recommendations() {
 const {
    data: recommendations,
    isLoading,
    isError,
    error,
  } = useQuery("Recommendations", getRecommendations)
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {(error as Error).message}</p>
  console.log('Recommendations:', recommendations)

  const { getAccessTokenSilently } = useAuth0()
  const token = await getAccessTokenSilently()

  return (
    <div>
      <h1 className="text-center">Previous Holiday Recommendations</h1>
      <table role="presentation">
        <thead>
          <tr>
            <th>
              <strong>Destination</strong>
            </th>
            <th>
              <strong>Why</strong>
            </th>
            <th>
              <strong>Visited</strong>
            </th>
          </tr>
        </thead>
        <tbody>
          {' '}
          {recommendations?.map(
            (recommendation: {
              destination: number
              reason: string
              visited: boolean
            }) => (
              <tr key={recommendation.destination}>
                <td>#{recommendation.destination}</td>
                <td>
                  {recommendation.reason}
                </td>
                <td>
                  {recommendation.visited}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}