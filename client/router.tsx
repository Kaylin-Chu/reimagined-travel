import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/1App'
import Home from './components/1Destination'
import Budget from './components/2Budget'
import Length from './components/3Length'
import PLACEHOLDER from './components/PLACEHOLDER'
// import Roadtrip from './components/Roadtrip'
import Submit from './components/Submit'
import HolidayRecs from './components/HolidayRecs'
import Recommendations from './components/Recommendations'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="budget" element={<Budget/>} />
    <Route path="length" element={<Length/>} />
    {/* <Route path="roadtrip" element={<Roadtrip/>} /> */}
    <Route path="submit" element={<Submit/>} />
    <Route path="recommendations" element={<Recommendations/>} />
    <Route path="holidayRecs" element={<HolidayRecs/>} />
    <Route path="placeholder" element={<PLACEHOLDER/>} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
