import './footer.scss'
import Arrow from '../../assets/top_arrow.png'

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerText">
        <p>Blandine Maurice ©</p>
        <p>Hébergé avec Vercel</p>
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
