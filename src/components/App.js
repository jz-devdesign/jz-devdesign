import "../style/components/App.scss";
import { HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import ModalContextProvider from "./ModalContext";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./Footer";
import DrLambda from "./pages/projects/DrLambda";
import BrokerApp from "./pages/projects/BrokerApp";
import ScrollToTop from "./ScrollToTop";
import Illustrations from "./pages/projects/Illustrations";

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
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
            <Route
              path={"/projects/drlambda"}
              element={
                <div className="app-content">
                  <DrLambda />
                </div>
              }
            />
            <Route
              path={"/projects/brokerapp"}
              element={
                <div className="app-content">
                  <BrokerApp />
                </div>
              }
            />
            <Route
              path={"/projects/illustrations"}
              element={
                <div className="app-content">
                  <Illustrations />
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
