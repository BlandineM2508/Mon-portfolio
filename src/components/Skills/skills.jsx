import './skills.scss'
import ReactIcon from '../../assets/reactJs.png'
import Html from '../../assets/Html.png'
import Js from '../../assets/Js.png'
import Sass from '../../assets/Sass.png'
import Redux from '../../assets/Redux.png'
import Git from '../../assets/Git.png'

function Skills() {
  return (
    <section className=" skillsContainer" id="skills">
      <h2 className="skillsTitle">Mes skills</h2>
      <div className="squareContainer">
        <div className="info BoxShadow_Orange">
          <img alt="icone html" className="icon" src={Html} />
          <p className="text">Utilisation du langage de balisage HTML.</p>
        </div>
        <div className="info BoxShadow_Yellow">
          <img alt="icone javascript" className="icon" src={Js} />
          <p className="text">Utilisation des bases du langage CSS.</p>
        </div>
        <div className="info BoxShadow_Blue">
          <img alt="icone react" className="icon" src={ReactIcon} />
          <p className="text">Utilisation de React.</p>
        </div>
        <div className="info BoxShadow_Pink">
          <img alt="icone sass" className="icon" src={Sass} />
          <p className="text">
            Utilisation du préprocesseur SASS et de sa synthaxe.
          </p>
        </div>
        <div className="info BoxShadow_Purple">
          <img alt="icone redux" className="icon" src={Redux} />
          <p className="text">
            Utilistion de Redux au sein d&apos;une application React.
          </p>
        </div>
        <div className="info BoxShadow_Green">
          <img alt="icone git" className="icon" src={Git} />
          <p className="text">
            Utilisation de Git et GitHub afin de versionner mon travail.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
