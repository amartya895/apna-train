import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./screens/home/Home";
import Navbar from "./components/navbar/Navbar";
import { createBrowserRouter, Outlet } from "react-router-dom";
import PnrStatus from "./screens/pnrStatus/PnrStatus";
import { Provider } from "react-redux";
import { store, persistor } from "./utils/store";
import TrainDetails from "./screens/TrainDetails";
import SeatAvailability from "./components/SeatAvailability";
import RunningStatus from "./components/RunningStatus";
import Timetable from "./components/Timetable";
import Reviews from "./components/Reviews";
import { PersistGate } from "redux-persist/integration/react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import TrainBetween from "./screens/TrainBetween";
import Booknow from "./screens/Booknow";
import TicketCard from "./components/TicketCard";
import Chat from "./screens/Chat";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navbar />
          <Outlet />
          <Footer />
        </PersistGate>
      </Provider>
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
      {
        path: "/train-search/:trainNo",
        element: <TrainDetails />,
        children: [
          {
            path: "seat-availability",
            element: <SeatAvailability />,
          },
          {
            path: "running-status",
            element: <RunningStatus />,
          },
          {
            path: "time-table",
            element: <Timetable />,
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path:"/trainBetween/:from/:to/:date",
        element:<TrainBetween/>
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path:"/booknow",
        element:<Booknow/>,
      },
      {
        
          path:"/myBooking",
          element:<TicketCard/>,
        
      },
      {
        path:"/chats",
        element:<Chat/>
      }
    ],
  },
]);
