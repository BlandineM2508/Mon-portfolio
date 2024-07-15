import './presentation.scss'
import Photo from '../../assets/Photo_2.png'

function Presentation() {
  return (
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
            Je suis Blandine Maurice, actuellement passionnée de web et de jeux
            videos, je suis motivée et pleine de motivation pour devenir une
            developpeuse Web performante ! J&apos;ai décidé de me reconvertir
            dans un domaine qui me passionne depuis un bout de temps et je me
            suis tournée vers OpenClassrooms pour pouvoir suivre une formation
            diplomante d&apos;integrateur Web. Sur ce site concu par mes soins,
            vous y trouverez mes divers projets et les details de mon parcours.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Presentation
