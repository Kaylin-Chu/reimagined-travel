import request from 'superagent'

//const rootURL = new URL('/api/v1', document.baseURI)
const rootURL = '/api/v1'

type HolidayParams = {
  destination: string
  budget: string
  length: string
}

// export async function getHoliday(params: HolidayParams): Promise<string> {
//   const res = await request.post(`${rootURL}/holiday`).send(params)
//   return res.body.holiday
// }
export async function getHoliday(params: HolidayParams): Promise<string> {
  const res = await request
    .post(`${rootURL}/holiday`)
    .send(params)
    .set('Accept', 'application/json')
  return res.body.holiday
}
