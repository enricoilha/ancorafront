import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/home";
import { EventPage } from "./pages/event";
import { StatsPage } from "./pages/stats";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/event/:id",
    element: <EventPage />,
  },
  {
    path: "/stats",
    element: <StatsPage />,
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
