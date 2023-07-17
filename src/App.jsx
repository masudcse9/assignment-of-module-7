
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainApp from "./components/MainApp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp/>
  }
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;