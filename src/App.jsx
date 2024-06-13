import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";
import { EventPage } from "./pages/event";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
