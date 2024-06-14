const WorkItem = ({ imgSrc, title, description, modalId, groups }) => {
  return (
    <div className="col-md-3 col-sm-4 col-xs-6" data-groups={JSON.stringify(groups)}>
      <div className="portfolio-item">
        <div className="portfolio-item-thumb">
          <img src={imgSrc} alt="" className="img-res" />
          <a href="#" className="rectangle" data-toggle="modal" data-target={`#${modalId}`}>
            <i className="fa fa-plus"></i>
          </a>
        </div>
        <div className="portfolio-info">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
