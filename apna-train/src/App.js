import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./screens/home/Home";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import PnrStatus from "./screens/pnrStatus/PnrStatus";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pnr-status",
        element: <PnrStatus />,
      },
    ],
  },
]);
