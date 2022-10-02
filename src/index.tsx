import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import { App } from "./App"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

const container = document.getElementById("root")
if (!container) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(container)



root.render(
  <React.StrictMode>
    <ColorModeScript />
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
