import './presentation.scss'
import Photo from '/Bm-Photo.JPG?url'

function Presentation() {
  return (
    <section className="margin">
      <div className="glassyBG_Presentation">
        <div className="presentationContainer ">
          <h2 className="sectionTitle-presentation fontTitle">Qui suis-je ?</h2>
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
              vous souhaite la Bienvenue sur mon Porfolio conçu par mes soins,
              codé avec React ! Ici, vous y trouverez mes divers projets et les
              compétences acquises lors mon parcours de formation. Il m&apos;a
              été donné de faire plusieurs travaux pratiques de mise en
              situation qui ont chacun été soumis à une soutenance afin de
              valider le projet. <br></br>
              <br></br>
              Je suis actuellement à la recherche d&apos;une alternance pour
              pouvoir gagner en experience sur le terrain et en apprendre
              davantage sur le metier de developpeur web. J&apos;aimerais
              compléter mon parcours avec une formation qui aurait pour objectif
              de me specialiser dans la conception front-end d&apos;application
              web en React. Par ailleurs, je reste ouverte à d&apos;autres
              apprentissages dans le métier car cela m&apos;interesse et me
              motive !
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
