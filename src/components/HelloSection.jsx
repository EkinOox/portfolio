const HelloSection = () => {
  return (
    <section className="site-section section-hello" id="intro">
      <div className="container">
        <h2>BONJOUR & BIENVENUE</h2>
        <p className="section-subtitle">
          <span>EXPLOREZ MON MONDE !</span>
        </p>
        <div className="row">
          <div className="col-sm-4">
            <div className="main-service text-right">
              <div className="rectangle">
                <i className="fa fa-calendar" aria-hidden="true"></i>
              </div>
              <h3>L'heure, c'est l'heure !</h3>
              <p>
                Je respecte au maximum les deadlines fixées afin de ne pas mettre en péril un projet, si celle-ci
                commence à ne pas être respectée alors je communiquerai sur mon problème.
              </p>
            </div>
            <div className="main-service text-right">
              <div className="rectangle">
                <i className="fa fa-comments" aria-hidden="true"></i>
              </div>
              <h3>La communication, la clé !</h3>
              <p>
                Je suis dans la capacité de communiquer durant les projets auxquels je suis attribué, je n'ai pas peur
                d'aller demander de l'aide ou d'aller chercher une solution à un problème.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="big-rectangle">
              <img src="../src/assets/img/logo_kyllian.png" alt="" style={{ width: '125px', top: '48%', left: '60%' }} />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="main-service text-left">
              <div className="rectangle">
                <i className="fa fa-check" aria-hidden="true"></i>
              </div>
              <h3>Qualité de production..</h3>
              <p>
                J'essaie au mieux de rendre un travail de qualité en évitant au possible les failles de sécurité.
              </p>
            </div>
            <div className="main-service text-left">
              <div className="rectangle">
                <i className="fa fa-list" aria-hidden="true"></i>
              </div>
              <h3>L'apprentissage..</h3>
              <p>
                Aimant apprendre et perfectionner les langages que je manipule, je n'hésite pas à me documenter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
