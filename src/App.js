import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="text-3xl bg-yellow-400">
          Edit something and save to reload.
        </p>
      
      </header>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// export default App;
