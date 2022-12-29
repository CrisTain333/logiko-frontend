import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";
import "./App.css"

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
