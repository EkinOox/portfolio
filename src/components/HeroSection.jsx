const HeroSection = () => {
  return (
      <div id="top" className="hero background-overlay">
          {/* Name & Description */}
          <div className="hero-content">
              <h1 className="typewriter">Je m'appelle Kyllian Diochon</h1>
              <p className="hero-job typewriter">
                  <span style={{textTransform: "uppercase"}}> je suis Développeur Full-Stack</span>
              </p>
              <p className="hero-job-desc typewriter" style={{textTransform: "uppercase"}}>Expert en développement web,
                  prêt à donner vie à vos projets. </p>

              <div className="hero-buttons">
                  <a href="../src/assets/document/cv.pdf" target="_blank" className="hero-button"> <i className="fa fa-download" aria-hidden="true"></i>  Télécharger
                      MON CV</a>
                  <a href="#contact" className="hero-button">Contact</a>
              </div>
          </div>

          {/* Hero Arrow */}
          <div className="hero-arrow page-scroll home-arrow-down">
              <a className="" href="#intro">
                  <i className="fa fa-angle-double-down" aria-hidden="true"></i>
              </a>
          </div>
      </div>
  );
};

export default HeroSection;
