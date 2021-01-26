import logo from "../logo.svg";

export function Page2({ onRouteChange }) {
  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page 2 - Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button onClick={() => onRouteChange("page1")}>Page 1</button>
      <button className="disabled">Page 2</button>
      <button onClick={() => onRouteChange("page3")}>Page 3</button>
    </div>
  );
}
