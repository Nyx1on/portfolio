import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#hero">Home</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#about">About</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#works">Projects</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contacts">Contacts</a>
            </li>
        </ul>
    </div>
  )
}
