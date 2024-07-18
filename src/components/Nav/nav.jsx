import './nav.scss'

function Nav() {
  return (
    <div className="navContainer" id="top">
      <h1 className="glassyBG">Blandine Maurice&nbsp;/&nbsp;Portfolio</h1>
      <nav className="glassyBG">
        <ul>
          <li>
            <a href="#projets">/&nbsp;Mes projets</a>
          </li>
          <li>
            <a href="#skills">/&nbsp;Mes skills</a>
          </li>
          <li>
            <a href="#contact">/&nbsp;Contactez-moi</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav
