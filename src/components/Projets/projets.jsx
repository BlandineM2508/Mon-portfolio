import './projets.scss'
import projects from '../../data/projectsData'

function Projets() {
  return (
    <div className="glassyBG_3" id="projets">
      <div className="projetsContainer">
        <h2 className="sectionTitle fontTitle">Mes projets</h2>
        <section className="gridContainer fontText">
          {projects.map((project) => (
            <div className="cardContainer" key={project.id}>
              <h3>{project.title}</h3>
              <a href={project.link} target="_blank">
                <article>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="projetsImg"
                  />
                  <div className="overlay overlayResponsive">
                    <h4>{project.description}</h4>
                    <p>{project.details}</p>
                  </div>
                </article>
              </a>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}

export default Projets
