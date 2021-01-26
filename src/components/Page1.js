import logo from "../logo.svg";

export default function Page1({ onRouteChange }) {
  return (
    <div className="app">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page 1 - Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <button className="disabled">Page 1</button>
      <button onClick={() => onRouteChange("page2")}>Page 2</button>
      <button onClick={() => onRouteChange("page3")}>Page 3</button>
    </div>
  );
}
