import logo from "./logo.svg";
import "./App.css";
import { Fragment } from "react";
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Home/Home";
import Body from "./Components/Body/Body";
import Footer from "./Components/UI/Footer";

function App() {
  return (
    <Fragment>
      <div className="w-auto h-auto overflow-x-hidden">
        <Navbar />
        <Home />
        <Body />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
