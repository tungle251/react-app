import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import SlideShowPage from './pages/slideshow'
import Dashboard from './pages/dashboard'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Dashboard />} />
      <Route path="slideshow" element={<SlideShowPage />} />
      <Route path="*" element={<>Page not found</>} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
