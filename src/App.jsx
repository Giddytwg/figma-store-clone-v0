
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

// Importing pages
import Shop from './Pages/Shop'
import Bag from './Pages/Bag'
import About from './Pages/About'
import ErrorPage from "./ErrorPage"
import PageLayout from "./Pages/PageLayout"
import CheckOut from "./Pages/CheckOut"
import ProductDetails from "./Components/ProductDetails"
import { ProductLayout } from "./Pages/ProductLayout"







function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="bag" element={<Bag />} >
            <Route path="checkout" element={<CheckOut />}/>
        </Route>
        <Route  path=":id" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  )

  return (
    
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
