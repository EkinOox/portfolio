const PortfolioItem = ({ imgSrc, category, title, modalTarget }) => (
  <div className="col-md-3 col-sm-4 col-xs-6" data-groups={`["${category}"]`}>
    <div className="portfolio-item">
      <div className="portfolio-item-thumb">
        <img src={imgSrc} alt="" className="img-res" />
        <a href="#" className="rectangle" data-toggle="modal" data-target={modalTarget}>
          <i className="fa fa-plus"></i>
        </a>
      </div>
      <div className="portfolio-info">
        <h3>{title}</h3>
        <p>{category}</p>
      </div>
    </div>
  </div>
);

const PortfolioSection = () => (
  <section className="site-section section-works" id="works">
    <div className="container">
      <h2>RECENT WORKS</h2>
      <p className="section-subtitle"><span>OUR CLIENTS LOVE US! READ WHAT THEY HAVE TO SAY</span></p>

      <div className="portfolio">
        <ul className="portfolio-sorting list-inline">
          <li><a href="#" className="active" data-group="all">all</a></li>
          <li><a href="#" className="" data-group="webdesign">Web Design</a></li>
          <li><a href="#" className="" data-group="webdev">Web Development</a></li>
          <li><a href="#" className="" data-group="mobileapps">Mobile apps</a></li>
        </ul>

        <div id="grid">
          {/* Portfolio items */}
          <PortfolioItem
            imgSrc="../src/assets/img/portfolio-1.jpg"
            category="webdesign"
            title="PSD Template"
            modalTarget="#portfolioItem21"
          />
          <PortfolioItem
            imgSrc="../src/assets/img/portfolio-2.jpg"
            category="webdev"
            title="Website"
            modalTarget="#portfolioItem22"
          />
          <PortfolioItem
            imgSrc="../src/assets/img/ariane-mediterranee-logo.png"
            category="mobileapps"
            title="Arianemed"
            modalTarget="#portfolioItem23"
          />
          {/* Add more PortfolioItem components as needed */}
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioSection;
