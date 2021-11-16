import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <SideBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
