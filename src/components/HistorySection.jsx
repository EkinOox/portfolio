const TimelineItem = ({ year, month, duration, position, title, description, imgSrc, timeLineSide }) => (
  <li className={timeLineSide}>
    <div className="rectangle timeline-rectangle"></div>
    <div className="timeline-panel">
      <div className="timeline-heading">
        <div className="timeline-date">
          <p>{year} {month}</p>
        </div>
        <div className="timeline-position">
          <p>{position}</p>
        </div>
      </div>
      <div className="timeline-body">
        <div className="timeline-body-thumb">
          <img src={imgSrc} className="img-res" alt="" />
        </div>
        <p>{description}</p>
      </div>
    </div>
  </li>
);

const HistorySection = () => (
  <section className="section-history" id="history">
    <div className="container">
      <div className="text-center section-diff-title">
        <h2>Mon Parcours</h2>
        <p>Voici mon évolution/parcours</p>
      </div>
      {/* Timeline */}
      <ul className="timeline">
        {/* Timeline items */}
        <TimelineItem
          year="2017"
          month="Mars"
          position="Stage de 3ème"
          title="Stage de 3ème"
          description="J'ai fait mon stage de 3ème au sein du 6ème régiment du matériel (57) dans la section 'informatique'. J'ai dans la même année obtenu mon brevet avec mention trés bien."
          imgSrc="../src/assets/img/timeline-img.jpg"
          timeLineSide = ""
        />

        <TimelineItem
          year="2020"
          position="BAC"
          duration="Septembre - Juillet"
          title="Baccalauréat"
          description="Pendant 3 ans, j'ai donc effectué mon année au lycée Beaussier (83) dans une filiére générale, avec comme spécialité : Maths, NSI (Informatique). J'ai donc obtenu le BAC avec mention Bien, ce qui m'a ouvert beaucoup de portes pour les écoles supérieurs."
          imgSrc="../src/assets/img/timeline-img.jpg"
          timeLineSide = "timeline-inverted"
        />

        <TimelineItem
          year="2020"
          duration="Septembre - Juillet"
          position="Formation"
          title="Formation"
          description="Tout au long de ma scolarité, je me suis formé à la programmation (python), au réseau, mais aussi à la partie web. Le web m'ayant vraiment intéressé, je me suis donc mis à fond dedans et je me suis donc auto-formé en réalisant certains projets."
          imgSrc="../src/assets/img/timeline-img.jpg"
          timeLineSide = ""
        />

        <TimelineItem
          year="2021"
          position="Université (MMI) 1ére année"
          duration="Septembre - Juillet"
          title="Université (MMI) 1ére année"
          description="J'ai intégré l'école MMI (Métiers du Multimedia et de l'Internet) à Toulon. étant une école dédiée au multimédia et plus particuliérement à l'informatique tournée vers le Web, je ne pouvais que m'orienter dans cette direction afin de poursuivre ma passion pour le web."
          imgSrc="../src/assets/img/timeline-img.jpg"
          timeLineSide = "timeline-inverted"
        />

        <TimelineItem
          year="2021"
          duration="1er Juin - 7 Juillet"
          position="Stage Bexter"
          title="Stage Bexter"
          description="Voici le début d'un nouveau commencement pour moi. J'intégre la société Bexter dans le cadre de mon stage de fin d'année. Je découvre le milieu de l'entreprise et je trouve éa réellement agréable. De plus, les travaux que j'ai pu faire n'ont fait que m'améliorer dans le web et mes maétres de stage aussi gréce aux connaissances qu'ils m'ont apportées. En fin de stage, ils m'ont laissé l'opportunité de rejoindre leur société en alternance en tant que dev back-end, à quoi j'ai dit oui."
          imgSrc="../src/assets/img/timeline-img.jpg"
          timeLineSide = ""
        />

        <TimelineItem
          year="2022"
          position="Université (MMI) 2éme année"
          duration="Septembre - Septembre"
          title="Université (MMI) 2éme année"
          description="J'ai donc rejoint pour cette 2éme année le groupe alternance avec lequel j'ai forgé une forte amitié et avec lequel j'ai pu apprendre de nombreuses choses. De plus, le passage à l'entreprise forge mon apprentissage et petit à petit mon avenir. Je suis au cété de formidables personnes à l'entreprise avec lesquelles je peux apprendre plus facilement et plus rapidement."
          imgSrc="../src/assets/img/timeline-img.jpg"
          timeLineSide = "timeline-inverted"
        />

        {/* Timeline end badge */}
        <li className="timeline-end">
          <div className="rectangle"><span>...</span></div>
        </li>
      </ul>
    </div>
  </section>
);

export default HistorySection;
