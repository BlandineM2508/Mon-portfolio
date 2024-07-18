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
    <div className="glassyBG_3" id="projets">
      <div className="projetsContainer ">
        <h2 className="sectionTitle fontTitle">Mes projets</h2>
        <section className="gridContainer fontText">
          <div className="cardContainer">
            <h3>Projet Booki</h3>
            <a href="https://github.com/BlandineM2508/Booki" target="blank">
              <article>
                <img src={Booki} alt="projet Booki" className="projetsImg" />
                <div className="overlay overlayResponsive">
                  <h4>Site d&apos;une agence de voyage</h4>
                  <p>
                    Pour faire ce projet j&apos;ai utlisé du HTML et du CSS afin
                    de créer une interface responsive. Utilisation de Figma pour
                    intégrer l&apos;interface mobile, tablette et desktop.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Ohmyfood</h3>
            <a
              href="https://github.com/BlandineM2508/OhMyFood_OC"
              target="blank"
            >
              <article>
                <img
                  src={Ohmyfood}
                  alt="projet oh my food"
                  className="projetsImg"
                />
                <div className="overlay overlayResponsive">
                  <h4>Application de restauration</h4>
                  <p>
                    Pour faire ce projet j&apos;ai utilisé des animations CSS et
                    le préprocesseur SASS afin d&apos;intégrer l&apos;interface
                    mobile et desktop de l&apos;application. J&apos;ai
                    privilégier une intégration en mobile-first.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Print it</h3>
            <a
              href="https://github.com/BlandineM2508/Print-it-OC"
              target="blank"
            >
              <article>
                <img
                  src={Printit}
                  alt="projet print it"
                  className="projetsImg"
                />
                <div className="overlay overlayResponsive">
                  <h4>Site statique d&apos;une agence d&apos;imprimerie</h4>
                  <p>
                    Pour ce projet, j&apos;ai intégrer des elements Javascript
                    demandés pour le projet. C&apos;est ma première approche sur
                    le langage.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Sophie Bluel</h3>
            <a
              href="https://github.com/BlandineM2508/Portfolio_Architecte_Sophie_Bluel"
              target="blank"
            >
              <article>
                <img
                  src={SophieBluel}
                  alt="projet sophie bluel"
                  className="projetsImg"
                />
                <div className="overlay overlayResponsive">
                  <h4>
                    Porfolio d&apos;une architecte d&apos;intérieur , Sophie
                    Bluel
                  </h4>
                  <p>
                    Pour ce projet, j&apos;ai été amenée à gérer des évèvements
                    utilsateurs en Javascript et manipuler les éléments du DOM
                    ainsi que la récupération des données utilisateurs via des
                    formulaires. J&apos;ai aussi appris à comprendre et utiliser
                    une API.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Qwenta</h3>
            <a
              href="https://docs.google.com/presentation/d/1wS0KbOFyUQXj79GQd17H-f1sty2d9wGBYxusazS8c5A/edit?usp=sharing"
              target="blank"
            >
              <article>
                <img src={Qwenta} alt="projet qwenta" className="projetsImg" />
                <div className="overlay overlayResponsive">
                  <h4>
                    Application de création de menus déstinée aux
                    <br /> restaurateurs
                  </h4>
                  <p>
                    Dans ce projet, il fallait planifier le développement du
                    site web d&apos;un client. Pour se faire, je devais
                    présenter la solution technique, rédiger les spécifications
                    techniques à partir de besoins fonctionnels, découper en
                    tâches une fonctionnalité et mettre en place une veille
                    technologique.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Kasa</h3>
            <a href="https://github.com/BlandineM2508/kasa" target="blank">
              <article>
                <img src={Kasa} alt="projet kasa" className="projetsImg" />
                <div className="overlay overlayResponsive">
                  <h4>Application de location immobilière avec React</h4>
                  <p>
                    Pour ce projet, j&apos;ai utilisé React et React Router afin
                    de configurer la navigation entre les pages de
                    l&apos;application. J&apos;ai appris à gérer différents
                    composants React et à les rendre intéractifs.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Nina Carducci</h3>
            <a
              href="https://github.com/BlandineM2508/Nina_Carducci_OC"
              target="blank"
            >
              <article>
                <img
                  src={NinaC}
                  alt="projet Nina Carducci"
                  className="projetsImg"
                />
                <div className="overlay overlayResponsive">
                  <h4>Portfolio de la photographe Nina Carducci</h4>
                  <p>
                    Pour ce projet, j&apos;ai utilisé l&apos;otpimisation du
                    référemcement, le SEO. Mon objectif était d&apos;améliorer
                    les performances et l&apos;accessibilité du site pour un
                    meilleur référencement sur les moteurs de recherche.
                    J&apos;ai utilisé des outils tels que Lighthouse et Wave.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet 724Events</h3>
            <a
              href="https://github.com/BlandineM2508/Debuggez-une-application-React.JS-main"
              target="blank"
            >
              <article>
                <img
                  src={events}
                  alt="projet 724Events"
                  className="projetsImg modifImg"
                />
                <div className="overlay overlayResponsive">
                  <h4>Site d&apos;une agence d&apos;événementiel</h4>
                  <p>
                    Pour ce projet, j&apos;ai débugger le site avec Chrome dev
                    tools afin de comprendre les divers bugs rencontrés et
                    pouvoir ensuite les résoudre. J&apos;ai rédigé un cahier de
                    recettes pour pouvoir tester le site et y répertorier tous
                    les scénarios possibles.
                  </p>
                </div>
              </article>
            </a>
          </div>

          <div className="cardContainer">
            <h3>Projet Argent Bank</h3>
            <a
              href="https://github.com/BlandineM2508/ArgentBank-website"
              target="blank"
            >
              <article>
                <img
                  src={ArgentBank}
                  alt="projet Argent Bank"
                  className="projetsImg"
                />
                <div className="overlay overlayResponsive">
                  <h4>Application bancaire</h4>
                  <p>
                    Pour ce projet, j&apos; utilisé React et Redux pour pouvoir
                    rendre mon application performante. J&apos;ai intégré le
                    front-end avec le back-end via des appels API. J&apos;ai
                    utilisé Swagger pour décrire les différentes routes et
                    actions nécessaires pour l&apos;API.
                  </p>
                </div>
              </article>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projets
