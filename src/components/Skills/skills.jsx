import './skills.scss'
import ReactIcon from '../../assets/reactJs.png'
import Html from '../../assets/Html.png'
import Js from '../../assets/Js.png'
import Sass from '../../assets/Sass.png'
import Redux from '../../assets/Redux.png'
import Git from '../../assets/Git.png'

function Skills() {
  return (
    <div className=" skillsContainer">
      <h2 className="skillsTitle">Mes skills</h2>
      <div className="squareContainer">
        <div className="info BoxShadow_Orange">
          <img alt="icone html" className="icon" src={Html} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
        <div className="info BoxShadow_Yellow">
          <img alt="icone javascript" className="icon" src={Js} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
        <div className="info BoxShadow_Blue">
          <img alt="icone react" className="icon" src={ReactIcon} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
        <div className="info BoxShadow_Pink">
          <img alt="icone sass" className="icon" src={Sass} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
        <div className="info BoxShadow_Purple">
          <img alt="icone redux" className="icon" src={Redux} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
        <div className="info BoxShadow_Green">
          <img alt="icone git" className="icon" src={Git} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
        <div className="info BoxShadow_Green">
          <img alt="icone git" className="icon" src={Git} />
          <p className="text">
            blop bkjkwjrkwjrk lejkwrjklwjrklwje krkwjrkejkr jklwj rlkw ejtrtr
            frwrw wewewew
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
