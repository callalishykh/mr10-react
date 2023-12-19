import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const layoutRoutes = [
  {
    path: "/about",
    element: <h1>about</h1>,
  },
  {
    path: "/home",
    element: <h1>home</h1>,
  },
  {
    path: "/dashboard",
    element: <h1>dashboard</h1>,
  },
];
const nonLayoutRoutes = [
  {
    path: "/sign-in",
    element: <h1>sign-in</h1>,
  },
];

const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>

        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        {nonLayoutRoutes.map((ele) => (
          <Route key={ele.path} path={ele.path} element={ele.element} />
        ))}
        <Route path='*' element={<h1>404</h1>} />
        <Route element={<NavBar />}>
          {layoutRoutes.map((ele) => (
            <Route key={ele.path} path={ele.path} element={ele.element} />
          ))}
          {/* <Route path='/about' element={<h1>about</h1>} />
          <Route path='/home' element={<h1>home</h1>} />
          <Route path='/dashboard' element={<h1>dashboard</h1>} /> */}
        </Route>
        <Route path='/NavBar' element={<NavBar />} />
        {/* <Route element={<h1>This is layout</h1>}>
          <Route path='/about' element={<h1>about</h1>} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
