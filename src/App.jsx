import Home from "./pages/Home"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Killingworth from "./pages/Killingworth"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/Killingworth',
    element: <Killingworth/>
  },
])

function App() {
  return(
   <RouterProvider router={router} />
  )
}

export default App
