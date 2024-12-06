import "./App.css";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./utils/Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchVideo from "./Components/WatchVideo";
import MainContainer from "./Components/MainContainer";
import SearchResults from "./Components/SearchResults";
import Layout from "./Components/Layout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchVideo />,
          },
          {
            path: "results",
            element: <SearchResults className="flex flex-col" />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
