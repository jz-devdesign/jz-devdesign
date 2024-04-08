import "../style/components/App.scss";
import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ModalContextProvider from "./ModalContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./Footer";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <ModalContextProvider>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path={"/"}
              element={
                <div className="app-content">
                  <HomePage />
                </div>
              }
            />
          </Routes>
          <div style={{ height: "0.01px" }} />
          <Footer />
        </div>
      </ModalContextProvider>
    </HashRouter>
  );
}

export default App;
