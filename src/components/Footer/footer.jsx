import './footer.scss'
import Arrow from '../../assets/top_arrow.png'

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerContent">
        <div className="textColumn">
          <p className="brand">
            Blandine Maurice © 2024 <br />
            Hébergé avec Vercel
          </p>
        </div>
        <div className="linkColumn">
          <a
            className="link"
            href="https://www.linkedin.com/in/blandine-maurice-99a49a151/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
      <a href="#top">
        <img
          src={Arrow}
          alt="flèche du haut pour retour en haut de la page"
          className="arrow"
        />
      </a>
    </div>
  )
}

export default Footer
