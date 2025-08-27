import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router'

import App from './components/App'
import Home from './components/Destination'
import Budget from './components/Budget'
import Length from './components/Length'
import PLACEHOLDER from './components/PLACEHOLDER'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="budget" element={<Budget/>} />
    <Route path="length" element={<Length/>} />
    <Route path="placeholder" element={<PLACEHOLDER/>} />
  </Route>,
)

const router = createBrowserRouter(routes)

export default router
