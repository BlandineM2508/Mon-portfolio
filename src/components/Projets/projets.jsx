import './projets.scss'
import Booki from '../../assets/Booki.webp'
import Ohmyfood from '../../assets/Ohmyfood.webp'
import Printit from '../../assets/Printit.webp'
import SophieBluel from '../../assets/SophieBluel.webp'
import Qwenta from '../../assets/Qwenta.webp'
import Kasa from '../../assets/Kasa.webp'
import NinaC from '../../assets/NinaC.webp'
import events from '../../assets/724events.webp'
import ArgentBank from '../../assets/ArgentBank.webp'

function Projets() {
  return (
    <div className="glassyBG_3">
      <div className="projetsContainer ">
        <h2 className="sectionTitle fontTitle">Mes projets</h2>
        <div className="gridContainer fontText">
          <a href="https://github.com/BlandineM2508/Booki">
            <article>
              <img src={Booki} alt="projet Booki" className="projetsImg" />
              <div className="overlay">
                <h3>Booki</h3>
                <p>Site d&apos;une agence de voyage</p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/OhMyFood_OC">
            <article>
              <img
                src={Ohmyfood}
                alt="projet oh my food"
                className="projetsImg"
              />
              <div className="overlay">
                <h3>Oh my food</h3>
                <p>
                  Application de restauration avec la présention de differentes
                  cartes
                </p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/Print-it-OC">
            <article>
              <img src={Printit} alt="projet print it" className="projetsImg" />
              <div className="overlay">
                <h3>Print it</h3>
                <p>Site d&apos;une agence d&apos;imprimerie</p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/Portfolio_Architecte_Sophie_Bluel">
            <article>
              <img
                src={SophieBluel}
                alt="projet sophie bluel"
                className="projetsImg"
              />
              <div className="overlay">
                <h3>Portfolio Sophie Bluel</h3>
                <p>Porfolio d&apos;une architecte d&apos;intérieur</p>
              </div>
            </article>
          </a>

          <a href="https://docs.google.com/presentation/d/1wS0KbOFyUQXj79GQd17H-f1sty2d9wGBYxusazS8c5A/edit?usp=sharing">
            <article>
              <img src={Qwenta} alt="projet qwenta" className="projetsImg" />
              <div className="overlay">
                <h3>Qwenta</h3>
                <p>Application de création de menus pour les restaurateurs</p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/kasa">
            <article>
              <img src={Kasa} alt="projet kasa" className="projetsImg" />
              <div className="overlay">
                <h3>Kasa</h3>
                <p>Application web de location immobilière avec React</p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/Nina_Carducci_OC">
            <article>
              <img
                src={NinaC}
                alt="projet Nina Carducci"
                className="projetsImg"
              />
              <div className="overlay">
                <h3>Portfolio Nina Carducci</h3>
                <p>Portfolio de la photographe Nina Carducci</p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/Debuggez-une-application-React.JS-main">
            <article>
              <img
                src={events}
                alt="projet 724Events"
                className="projetsImg modifImg"
              />
              <div className="overlay">
                <h3>724Events</h3>
                <p>Site d&apos;une agence d&apos;événementiel</p>
              </div>
            </article>
          </a>

          <a href="https://github.com/BlandineM2508/ArgentBank-website">
            <article>
              <img
                src={ArgentBank}
                alt="projet Argent Bank"
                className="projetsImg"
              />
              <div className="overlay">
                <h3>Argent Bank</h3>
                <p>Application bancaire</p>
              </div>
            </article>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projets
