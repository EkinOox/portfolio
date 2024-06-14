import React from 'react';

const ServicesSection = () => {
    return (
        <section className="site-section section-services">
            <div className="container">
                <div className="carousel slide" id="services-carousel">

                    <div className="item-controls text-center">
                        <a href="#services-carousel" className="left btn carousel-control" data-slide="prev"><i
                            className="fa fa-angle-left" aria-hidden="true"></i>
                        </a>
                        <a href="#services-carousel" className="right btn carousel-control" data-slide="next"><i
                            className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="carousel-indicators nav-tabs text-center">
                        <a data-target="#services-carousel" href="#" data-slide-to="0" className="active">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-laptop" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Web design</p>
                                </div>
                            </div>
                        </a>
                        <a data-target="#services-carousel" href="#" data-slide-to="1">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-code" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Web development</p>
                                </div>
                            </div>
                        </a>
                        <a data-target="#services-carousel" href="#" data-slide-to="2">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-mobile" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Mobile Development</p>
                                </div>
                            </div>
                        </a>
                        <a data-target="#services-carousel" href="#" data-slide-to="3">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">SEO optimization</p>
                                </div>
                            </div>
                        </a>
                        <a data-target="#services-carousel" href="#" data-slide-to="4">
                            <div className="col-xs-4 col-sm-fifth">
                                <div className="service">
                                    <div className="rectangle">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </div>
                                    <p className="hidden-xs">Social Media</p>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="carousel-inner">
                        <div id="item1" className="item tab-pane active">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Web Design</h3>
                                        <p style={{textAlign: 'justify'}}>Grâce à mes études en MMI (Métier Du Multimédia
                                            et de l'Internet), j'ai pu acquérir
                                            beaucoup de compétences en Web design que je n'avais pas au début, que ce
                                            soit au niveau
                                            de l'expérience utilisateur ou même dans la manière de construire mes
                                            différentes pages et
                                            section. J'ai aussi pu acquérir de l'experience et des moyens technique afin
                                            de faire un site
                                            esthétique (même si finalement la créativité n'est pas mon fort). En effet,
                                            j'ai aussi pu apprendre
                                            à m'inspirer de l'existant afin de ne pas rester devant une page blanche.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="../src/assets/img/web-design.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item2" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Développement Web</h3>
                                        <p style={{textAlign: 'justify'}}>Le développement web étant l'une de mes
                                            principales passions, j'en ai fait un atout
                                            tout au long de mon parcours en apprenant par moi-même, avec l'école ou même
                                            en entreprise<b>(bexter)</b>. Je me suis spécialisé
                                            en PHP, HTML, CSS, JQUERY et je continue de parfaire cet "atout" en
                                            apprenant aussi le Javascript et certain Framework (AlpineJS, AngularJS,
                                            etc...).</p>

                                        <p style={{textAlign: 'justify'}}>Bien que le design sois un des principaux
                                            composant d'un site et ce qui le rend vendable,
                                            le back-end reste le plus essentiel et celui qui au final l'emportera sur un
                                            design bien fait. </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="../src/assets/img/web-development.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item3" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Développement sur Mobile</h3>
                                        <p style={{textAlign: 'justify'}}>Je considère le développement mobile comme un
                                            développement à part, c'est-à-dire
                                            que le développement mobile pour moi n'est pas du responsive (que je
                                            maîtrise) mais plus des App mobiles. J'ai donc eu l'occasion d'avoir
                                            un unique projet mobile nommé "ArianeMed" et réalisé avec Flutter alors que
                                            je n'avais aucune expérience avec ce langage.
                                        </p>
                                        <p style={{textAlign: 'justify'}}>Ce fut difficile mais pas impossible, car j'ai
                                            réussi à la mettre en place et à la publier par la suite (PlayStore et
                                            AppStore).
                                            Je ne considère pas avoir une grande expérience en développement mobile,
                                            cependant, je serais dans la capacité de me former si besoin.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="../src/assets/img/mobile-development.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item4" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">SEO</h3>
                                        <p style={{textAlign: 'justify'}}>Que serait un site internet sans référencement
                                            ?<br /><br />
                                            Effectivement un site sans référencement ça ne vaut rien, c'est pourquoi
                                            j'ai appris à optimiser au mieux les sites
                                            que je fais. De manière naturelle dans un premier temps et si besoin ou par
                                            demande du client, je le fais aussi avec des GoogleADS.
                                            Ainsi, je garantis un référencement propre permettant au client de sortir au
                                            mieux lors d'une recherche.</p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="../src/assets/img/seo-optimization.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                        <div id="item5" className="item tab-pane">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="service-info">
                                        <h3 className="service-title">Réseaux Sociaux</h3>
                                        <p>Pourquoi s'arrêter aux sites web quand les réseaux sociaux font un travail de
                                            qualités ?<br /><br />
                                            En effet, je ne me suis pas arrêté aux sites web, car j'estime que les
                                            réseaux ont aujourd'hui une place centrale
                                            dans notre vie. C'est pour quoi, je me suis formé aux réseaux avec les posts
                                            et ce qui fonctionne ou non.
                                            Je suis donc dans la capacité de produire des posts et faire des études sur
                                            le marché.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <img src="../src/assets/img/social-media.jpg" className="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
