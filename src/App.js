import ReactDOM from "react-dom/client";
import "./App.css";
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Body/>
     
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// export default App;
