import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Homepage/index.jsx";
import CreateMeetPage from "./pages/CreateMeetPage/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateMeetPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);