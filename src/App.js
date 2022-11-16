import "./App.css";
import Header from "./components/Header";
import FormGroup from "./components/FormGroup";
import PayArea from "./components/PayArea";
import Provider from "./context/checkContext";

function App() {
  return (
    <div className="App container mt-3 mb-3">
      <h5 className="fw-bold">Ödeme seçenekleri</h5>
      <div className="main mt-3">
        <Provider>
          <Header />
          <FormGroup />
          <PayArea />
        </Provider>
      </div>
    </div>
  );
}

export default App;
