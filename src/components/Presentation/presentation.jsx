import './presentation.scss'
import Photo from '../../assets/Photo_2.webp'

function Presentation() {
  return (
    <div className="margin">
      <div className="glassyBG_Presentation">
        <div className="presentationContainer ">
          <h2 className="sectionTitle fontTitle">Qui suis-je ? </h2>
          <img
            className="presentationPhoto"
            src={Photo}
            alt="photo de Blandine Maurice"
          />
          <div className="presentationTextContainer">
            <p>
              Je suis Blandine Maurice, et j&apos;ai souhaité me reconvertir
              dans le developpement Web avec Openclassrooms afin d&apos;avoir
              une formation adaptée à mes besoins d&apos;integrateur Web. Je
              suis motivée et pleine de ressources ! J&apos;adore découvrir de
              nouvelles choses au quotidien et apprendre davatange. Je vous
              souhaite la Bienvenue sur mon Porfolio conçu par mes soins ! Ici,
              vous y trouverez mes divers projets et les compétences acquises
              lors mon parcours.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Presentation
