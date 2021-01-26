import { useState } from "react";
import Page1 from "./components/Page1";

// import Page2 from "./components/Page2";
// import Page3 from "./components/Page3";

import "./App.css";

function App() {
  const [route, setRoute] = useState("page1");
  const [ActiveComponent, setActiveComponent] = useState("");

  const onRouteChange = (newRoute) => {
    // without code splitting
    // setRoute(newRoute);

    // with code splitting
    if (newRoute === "page1") {
      setRoute(newRoute);
      setActiveComponent("");
    } else {
      if (newRoute === "page2")
        import("./components/Page2").then(({ Page2 }) => {
          setActiveComponent({ Component: Page2 });
          setRoute("page2");
        });
      else if (newRoute === "page3")
        import("./components/Page3").then(({ Page3 }) => {
          setActiveComponent({ Component: Page3 });
          setRoute("page3");
        });
    }
  };

  return (
    <div className="App">
      {/* without code splitting
      {route === "page1" ? <Page1 onRouteChange={onRouteChange} /> : null}
      {route === "page2" ? <Page2 onRouteChange={onRouteChange} /> : null}
      {route === "page3" ? <Page3 onRouteChange={onRouteChange} /> : null} 
      */}

      {/* with code splitting */}
      {route === "page1" ? (
        <Page1 onRouteChange={onRouteChange} />
      ) : (
        <ActiveComponent.Component onRouteChange={onRouteChange} />
        // ActiveComponent({ onRouteChange })
      )}
    </div>
  );
}

export default App;
