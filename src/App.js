// import "./App.css";
// import LayoutStoffs from "./components/LayoutStoffs";
import DismissibleToast from "./components/DismissableToast";
import BasicToast from "./components/BasicToast";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Demo React Bootstrap Stoffs!</h2>
        <hr />
        {/* <LayoutStoffs /> */}
        <h5> Components Stoffs</h5>
        <BasicToast />
        <DismissibleToast />
        <Tooltip />
      </header>
    </div>
  );
}

export default App;
