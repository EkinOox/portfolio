const Modal = ({ id, imgSrc, title, content, btnText, btnLink }) => (
  <div id={id} className="modal fade fade-scale" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <a className="rectangle" data-dismiss="modal"><i className="fa fa-times"></i></a>
          <img className="img-res" src={imgSrc} alt="" />
        </div>
        <div className="modal-body">
          <h4 className="modal-title">{title}</h4>
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          <a href={btnLink} rel="noreferrer" target="_blank" className="btn">{btnText}</a>
        </div>
      </div>
    </div>
  </div>
);

const PortfolioModals = () => {
  // Define modal data
  const modalsData = [
    {
      id: 'portfolioItem1',
      imgSrc: '../src/assets/img/critairUP.png',
      title: 'critairUP',
      content: ` Dans le cadre de la réalisation de l'application météorologique CritairUP, j'ai utilisé des
      outils statistiques pour faciliter l'analyse et l'exploitation des données. En effet,
      l'application permet de traiter des données relatives à la pollution de l'air dans une ville
      donnée (VAR, 83), en fournissant pour chaque jour (j, j+1 et j+2) l'indice de qualité de l'air
      (IQA) ainsi
      que la particule la plus présente dans l'air. Pour permettre à l'utilisateur de visualiser
      facilement les niveaux de pollution, j'ai créé un systéme d'indices de couleur, allant du vert
      pour une qualité de l'air satisfaisante au rouge pour une qualité de l'air dangereuse.</br></br>
      J'ai
      également conéu un graphique représentant chaque particule présente dans l'air ainsi que leur
      taux de présence, afin de permettre à l'utilisateur de mieux comprendre les sources de pollution
      et d'agir en conséquence. En somme, j'ai utilisé des outils statistiques pour faciliter
      l'analyse des données relatives à la pollution de l'air dans la ville, et ainsi proposer à
      l'utilisateur une application claire et intuitive pour mieux comprendre les enjeux
      environnementaux de son environnement. De plus, je propose dans l'application de suivre de
      maniére
      réguliére la météo dans la ville souhaité par l'utilisateur ou même d'exploiter les
      fonctionnalités
      de mon application directement en géolocalisant l'utilisateur sans qu'il se prenne la tête pour
      chercher sa ville.`,
      btnText: 'Visitez le site',
      btnLink: 'https://critairup.000webhostapp.com/',
    },
    {
      id: 'portfolioItem2',
      imgSrc: '../src/assets/img/losgritos.png',
      title: 'Los Gritos',
      content: `Grâce à plusieurs projets menés tout au long de l'année dans le design d'expérience, j'ai pu
      acquérir de nombreuses compétences en matiére de parcours clients,de points de contact,
      de points de friction ainsi que de satisfaction pour obtenir un projet qui va
      permettre à l'utilisateur d'avoir la meilleure expérience possible.</br></br>
      J'ai mis ces points en pratique dans un projet nommé "Los Gritos", qui est en fait un restaurant
      mexicain par lequel un
      client peut commander en ligne un plat qu'il veut (plat variable ou non) en lui laissant la
      possibilité de se connecter ou non avant l'achat. De plus, celui-ci pourra se faire livrer ou il
      pourra
      venir le chercher en click&collect s'il le désire. Le design d'expérience rentre alors en compte
      car, en effet, on lui demandera en premier lieu s'il est éligible à la livraison (point de
      statisfaction) et si ce n'est
      pas le cas, alors il devra le chercher en click&collect (point de friction amoindri car avant le
      passage à la commande).</br></br>
      De plus, il n'est pas obligé de se
      connecter, cependant, la connexion lui offre des points bonus à chaque commande (avantages),
      ainsi que de retrouver ses anciennes commandes pour les recommander s'il le souhaite (points de
      statisfaction mis en place et effacement d'un point de frictions). La connexion
      est donc rentable pour lui et cela permet une fidélisation de plus pour le restaurant. Je suis
      donc capable d'identifier et de décrire les parcours clients de maniére détaillée et précise
      afin de mettre en évidence les points forts et de réduire au mieux les points faibles pour un
      parcours utilisateur optimal, léger et rapide.`,
      btnText: 'Visitez le site',
      btnLink: 'https://www.losgritos.azzurra-pro.com/',
    },
    {
      id: 'portfolioItem3',
      imgSrc: '../src/assets/img/qrent.png',
      title: 'QRent',
      content: '... Your content for QRent ...',
      btnText: 'En savoir plus',
      btnLink: '#',
    },
  ];

  return (
    <>
      {modalsData.map((modal) => (
        <Modal key={modal.id} {...modal} />
      ))}
    </>
  );
};

export default PortfolioModals;
