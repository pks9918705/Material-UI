 
 import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
 } from "react-router-dom"
import Notes from "./pages/Notes";
import Create from "./pages/Create";

function App() {


  const routes=createRoutesFromElements(
    <>
    < Route path="/"  element={<Notes/>} />
    < Route path="/create"  element={<Create/>} />
     
     
    </>
  )
  const router=createBrowserRouter(routes)

  return (
     <>
    <RouterProvider router={router}/>
     </>
  );
}

export default App;
