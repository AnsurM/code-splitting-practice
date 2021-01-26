import { useState } from "react";
import { Page1, Page2, Page3 } from "./components";

import "./App.css";

function App() {
  const [route, setRoute] = useState("page1");

  const onRouteChange = (newRoute) => setRoute(newRoute);

  return (
    <div className="App">
      {route === "page1" ? <Page1 onRouteChange={onRouteChange} /> : null}
      {route === "page2" ? <Page2 onRouteChange={onRouteChange} /> : null}
      {route === "page3" ? <Page3 onRouteChange={onRouteChange} /> : null}
    </div>
  );
}

export default App;
