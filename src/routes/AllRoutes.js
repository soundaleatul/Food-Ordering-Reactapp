import { createBrowserRouter} from "react-router-dom";
import react from "react";
import AppLayout from "../App";
import Body from "../components/Body";
import About from "../components/About";
import Contact from "../components/Contact";
import Error from "../components/Error";
import RestaurentMenu from "../components/RestaurentMenu";
import Cart from "../components/Cart";
import { lazy , Suspense, } from "react";
const Grocery = lazy(() => import("../components/Grocery"));


export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurent/:resId",
          element: <RestaurentMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/grocery",
          element: (
            <Suspense fallback={<h1>Wait for a sec...</h1>}>
              <Grocery />
            </Suspense>
          ),
        },
      ],
      errorElement: <Error />,
    },
  ]);