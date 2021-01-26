import logo from "../logo.svg";

export function Page3({ onRouteChange }) {
  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page 3 - Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => onRouteChange("page1")}>Page 1</button>
      <button onClick={() => onRouteChange("page2")}>Page 2</button>
      <button className="disabled">Page 3</button>
    </div>
  );
}
