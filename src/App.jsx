import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      // <Route>
        <Route path="/" element={< Layout/>}>
          <Route index element={<Home/>}>
          </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />
}

export default App