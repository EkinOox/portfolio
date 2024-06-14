const AboutSection = () => {
  return (
    <section className="site-section section-skills" id="about">
      <div className="container">
        <h2 style={{ display: 'flex', justifyContent: 'center' }}>A propos de mes compétences</h2>
        <p className="section-subtitle"><span>Le développement web</span></p><br />
        <div className="row">
          <div className="col-sm-6" style={{ marginTop: '2em' }}>
            <img src="../src/assets/img/portfolio-6.jpg" style={{ width: '100%', height: '100%', borderRadius: '10px' }} alt="" />
          </div>
          <div className="col-sm-6" style={{ marginTop: '2em' }}>
            <div className="progress-group">
              <p>Web design</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="70"></div>
              </div>
            </div>

            <div className="progress-group">
              <p>Developpement Web (Back-End)</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="90"></div>
              </div>
            </div>

            <div className="progress-group">
              <p>Developpement Web (Front-End)</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
              </div>
            </div>

            <div className="progress-group">
              <p>Developpement Mobile</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="65"></div>
              </div>
            </div>

            <div className="progress-group">
              <p>SEO</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="100"></div>
              </div>
            </div>

            <div className="progress-group">
              <p>Réseaux Sociaux</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
