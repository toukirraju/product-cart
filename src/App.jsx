import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import store from "./redux/store";
import "./styles/output.css";
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <!-- Navbar --> */}
        <Navbar />
        {/* <!-- Navbar ends --> */}
        <main className="py-16">
          <Home />
        </main>
      </div>
    </Provider>
  );
}

export default App;
