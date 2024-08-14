import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ErrorPage from "./Error";
import ResturentMenu from "./ResturentMenu";
import UserContext from "./utils/UserContext";
import { useEffect, useState } from "react";
import ProductByCatagory from "./ProductByCatagory";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";

const App = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const auther = {
      loginUser: "Sachin Das",
    };
    setUserName(auther.loginUser);
  }, []);
  return (
    <>
    <Provider store={appStore}>
      <UserContext.Provider value={{ loginUser: userName, setUserName }}>
        <Header />
        <Outlet />
      </UserContext.Provider>
      </Provider>
    </>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "resturent/:resid",
        element: <ResturentMenu />,
      },
      {
        path:"/:category",
        element: <ProductByCatagory />
      }
    ],
  },
]);

const AppLayout = () => {
  return <RouterProvider router={routes}></RouterProvider>;
};

export default AppLayout;
