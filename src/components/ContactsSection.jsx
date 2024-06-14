const ContactSection = () => (
  <section className="site-section section-contact" id="contact">
    <div className="container">
      <h2>CONTACTEZ-MOI</h2>
      <p className="section-subtitle"><span>JE SUIS ICI</span></p>
      <div className="row">
        <form>
          <div className="col-md-4">
            <input className="form-control" type="text" placeholder="Nom" required />
          </div>
          <div className="col-md-4">
            <input className="form-control" type="email" placeholder="Email" required />
          </div>
          <div className="col-md-4">
            <input className="form-control" type="text" placeholder="Sujet" required />
          </div>
          <div className="col-sm-12">
            <textarea className="form-control" placeholder="Votre Message" required></textarea>
          </div>
          <div className="col-sm-12">
            <button className="btn">Envoyer</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactSection;
