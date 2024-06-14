import WorkItem from './WorkItem';

const WorksSection = () => {

    const portfolioItems = [
        { imgSrc: '../src/assets/img/critairUP.png', title: 'critairUP', description: 'Application météorologique avec IQA', modalId: 'portfolioItem1', groups: ['comprendre'] },
        { imgSrc: '../src/assets/img/losgritos.png', title: 'Los Gritos', description: 'Application de restauration en ligne', modalId: 'portfolioItem2', groups: ['comprendre'] },
        { imgSrc: '../src/assets/img/mmilan.png', title: 'MMILAN', description: 'LAN entre étudiants', modalId: 'portfolioItem3', groups: ['comprendre'] }
    ];
      
  return (
    <section className="site-section section-works">
      <div className="container">
        <h2>Le travail réalisé</h2>
        <p className="section-subtitle">
          <span>afin d'obtenir mes compétences :</span>
        </p>

        <div className="portfolio">
          <ul className="portfolio-sorting list-inline">
            <li><a href="#" className="active" data-group="all">All</a></li>
            <li><a href="#" className="" data-group="comprendre">Comprendre</a></li>
            <li><a href="#" className="" data-group="concevoir">Concevoir</a></li>
            <li><a href="#" className="" data-group="exprimer">Exprimer</a></li>
            <li><a href="#" className="" data-group="developper">Développer</a></li>
            <li><a href="#" className="" data-group="entreprendre">Entreprendre</a></li>
          </ul>

          <div id="grid">
            {portfolioItems.map((item, index) => (
              <WorkItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
