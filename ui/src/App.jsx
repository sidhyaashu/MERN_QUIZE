import "./styles/App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


/**Imports Components */
import Main from './components/Main';
import Quize from './components/Quize';
import Result from './components/Result';


/**Routes for all components */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/quiz",
    element: <Quize></Quize>,
  },
  {
    path: "/result",
    element: <Result></Result>,
  },
]);

const App = () => {
  return <section>
  <RouterProvider router={router} />
  </section>
};

export default App;
