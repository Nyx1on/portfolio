import Contacts from "./pages/contacts/Contacts";
import Intro from "./pages/intro/Intro";
import About from "./pages/about/About";
import Topbar from "./components/topbar/Topbar";
import Works from "./pages/works/Works";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import SideBar from "./components/side bar/SideBar";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <SideBar />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro menuOpen={menuOpen}/>
        <About menuOpen={menuOpen}/>
        <Works menuOpen={menuOpen}/>
        <Contacts menuOpen={menuOpen}/>
      </div>
    </div>
  );
}

export default App;
