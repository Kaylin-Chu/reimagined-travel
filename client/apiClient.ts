import request from 'superagent'

const rootURL = '/api/v1'

type HolidayParams = {
  destination: string
  budget: string
  length: string
  departureLocation: string
}

export async function getHoliday(params: HolidayParams, token: string): Promise<string> {
  try{ const res = await request
    .post(`${rootURL}/holiday`)
    .send(params)
    //.set('Accept', 'application/json')
    .set('Authorization', `Bearer ${token}`)
  return res.body.holiday
  } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('getHoliday() failed:', err.message)
      } else {
        console.error('getHoliday() failed:', err)
      }
      return 'Failed to fetch holiday recommendation'
  }
}