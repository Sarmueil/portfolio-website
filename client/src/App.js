import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { gsap } from "gsap";
import './styles/App.css'
import Header from "./components/header";
import Navigation from "./components/navigation";

import Contact from "./pages/Contact";
import Approach from "./pages/approach";
import Services from "./pages/services";
import About from "./pages/about";
import Home from "./pages/home";
import Decamovies from "./pages/Decamovies"
import Snipestores from "./pages/Snipestores";
import Retina from "./pages/Retina";
import Projects from "./pages/Projects"

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "contact", Component:Contact },
  { path: "/approach", name: "approach", Component: Approach },
  { path: "/services", name: "services", Component: Services },
  { path: "/decamovies", name: "decamovies", Component: Decamovies},
  { path: "/snipestores", name: "snipestores", Component: Snipestores},
  { path: "/retina", name: "retina", Component: Retina},
  { path: "/projects", name: "projects", Component: Projects},
  { path: "/about-us", name: "about", Component: About }
];

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

function App() {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });

  useEffect(() => {
    // prevents flashing
    gsap.to("body", 0, { css: { visibility: "visible" } });
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      });
    }, 1000);

    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  return (
    <>
      <Header dimensions={dimensions} />
      <div className='App'>
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component dimensions={dimensions} />
          </Route>
        ))}
      </div>
      <Navigation />
    </>
  );
}

export default App;
