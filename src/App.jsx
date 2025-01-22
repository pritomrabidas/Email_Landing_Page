import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import Features from "./Component/Features";
import Pricing from "./Component/Pricing";
import Resources from "./Component/Resources";
import Contact from "./Component/Contact";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
        <Route path="/" element={< Layout/>}>
          <Route index element={<Home/>}></Route>
          <Route path="/features" element={<Features/>}></Route>
          <Route path="/pricing" element={<Pricing/>}></Route>
          <Route path="/resources" element={<Resources/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App