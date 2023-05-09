import Contacts from "./pages/contacts/Contacts"
import Intro from "./pages/intro/Intro"
import About from "./pages/about/About"
import Topbar from "./components/topbar/Topbar"
import Works from "./pages/works/Works"
import "./app.scss"
import { useState } from "react"
import Menu from "./components/menu/Menu"
import SideBar from "./components/side bar/SideBar"


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <SideBar/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <About/>
        <Works/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
