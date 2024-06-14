const Footer = () => (
  <footer id="colophon" className="site-footer">
    <div className="container-fluid footer-up">
      <ul className="list-unstyled list-inline">
        <li className="page-scroll"><a href="#top">Accueil</a></li>
        <li className="page-scroll"><a href="#intro">Intro</a></li>
        <li className="page-scroll"><a href="#about">A propos / Skills</a></li>
        <li className="page-scroll"><a href="#works">Mes Travaux</a></li>
        <li className="page-scroll"><a href="#history">Mon Parcours</a></li>
        <li className="page-scroll"><a href="#contact">Contact</a></li>
      </ul>

      <div className="page-scroll">
        <a href="#top" className="rectangle">
          <i className="fa fa-angle-double-up"></i>
        </a>
      </div>
    </div>

    <div className="container text-center footer-down">
      <p className="copyright">&copy; <a href="https://www.instagram.com/kyllian.dch/" rel="noreferrer" target="_blank">Kyllian Diochon</a> - 2023</p>
    </div>
    
  </footer>
);

export default Footer;
