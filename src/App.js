import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EPassPage from "./pages/EPass";
import "./App.css";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="h-screen flex flex-col justify-center items-center">
          <h3 className="text-2xl">Invalid URL</h3>
          <p>Please enter a valid ePass URL</p>
        </div>
      ),
    },
    {
      path: "/epass/:passId",
      element: <EPassPage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
