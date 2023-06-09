import "../node_modules/boxicons/dist/boxicons"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Nav from "./component/Nav.jsx";
import Countries from "./component/Countries.jsx";
import Footer from "./component/Footer.jsx";
import {useState} from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Nav setSearchValue={setSearchValue} />
      <Countries searchValue={searchValue} />
      <Footer />
    </>
  )
}

export default App