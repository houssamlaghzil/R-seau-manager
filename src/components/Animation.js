import React from "react"


import '../asset/css/style.css'
import '../asset/css/animation/animation.css'
import '../asset/css/mediaDoc/mediaDoc.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'

export default function Animation() {

    return (
        <>
            <header>
                <ul className="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="logo mgp" src="/Bloc marque MGP + CVV.png"/>
                    </a>
                    <a href="/Actuality">
                        <li>ACTUALITES DU RESEAU</li>
                    </a>
                    <a href="/MediaDoc">
                        <li>MEDIATHEQUE</li>
                    </a>
                    <a id="headselect" href="/Animation">
                        <li>ECHANGES ET PARTAGES</li>
                    </a>
                    <a href="/Contact">
                        <li>ANNUAIRE</li>
                    </a>
                    <a href="/Partenaires">
                        <li>PARTENAIRES</li>
                    </a>
                    {/* <!--<a href="/page/tools.html">
                        <li>BOITE A OUTILS</li>
                    </a>-->*/}
                    <a href="/profil">
                        <div className="tooltipDASH">
                            <img id="logoprofilhead" alt="logo profil" src="/user_profile_icon_176439.svg"/>
                            <span className="tooltiptextDASH">Modification de mot de passe et déconnexion.</span>
                        </div>
                    </a>
                </ul>
            </header>

            <h1 id="Animation" className="hero Animation"></h1>


            <div className="divanim">

                <div className="anileft">
                    <h1 className="firstdiv titleSclack">Le réseau vous permet d'échanger avec les autres membres via un dispositif
                        dédié.
                        <br/><br/>Pour rejoindre votre réseau</h1>
                    <a target="_blank" href="https://reseaumgp.slack.com/ssb/redirect?entry_point=homepage_nav">
                        <button className="btn-shine btnanim">
                            Cliquez ici
                        </button>
                    </a>


                </div>

                <div className="aniright">
                    <div className="wrapper">
                        <div className="wrap-1">
                            <input id="tab-1" name="tabs" type="radio"/>
                                <label htmlFor="tab-1">
                                    <div className="nametitle">Des questions? cliquez ici</div>
                                    <div className="cross"></div>
                                </label>
                                <div className="questions">
                                    <div className="question-wrap">
                                        <input id="question-1" name="question" type="radio"/>
                                            <label htmlFor="question-1">
                                                <div>Tuto video</div>
                                                <div className="cross"></div>
                                            </label>
                                            <div className="content">
                                                <p className="pLinkAnimation">
                                                    <a className="pLinkAnimation" href="https://www.youtube.com/embed/iyhd91rWtRo">ici une vidéo
                                                        explicative</a>

                                                </p>
                                            </div>
                                    </div>
                                    <div className="question-wrap">
                                        <input id="question-2" name="question" type="radio"/>
                                            <label htmlFor="question-2">
                                                <div>En savoir plus sur Slack et son utilisation</div>
                                                <div className="cross"></div>
                                            </label>
                                            <div className="content">
                                                <p>
                                                    <a target="_blank"
                                                       href="https://slack.com/intl/fr-fr/help/articles/360059928654-Votre-guide-de-d%C3%A9marrage-rapide-sur-l%E2%80%99utilisation-de-Slack#barre-de-navigation">
                                                        <p className="pLinkAnimation">En savoir plus sur slack et son utilisation cliquez ici </p>
                                                    </a>
                                                </p>

                                            </div>
                                    </div>
                                    <div className="question-wrap">
                                        <input id="question-3" name="question" type="radio"/>
                                            <label htmlFor="question-3">
                                                <div>Vous n'avez pas reçu d'invitation ?</div>
                                                <div className="cross"></div>
                                            </label>
                                            <div className="content">
                                                    <h1 className="h1AnimationLink">Si vous n'avez pas reçu d'invitation pour vous connecter à cet
                                                        outil <p> </p>
                                                        <a className="pLinkAnimation" href="https://join.slack.com/t/reseaumgp/shared_invite/zt-qsa9hez5-w0~W3QyyO1Rgz3FL5atW9A"
                                                           target="_blank">
                                                             cliquez ici
                                                        </a>
                                                    </h1>
                                            </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-wrapper">
                <footer>
                    <div className="footer-top">
                        <div className="">

                        </div>
                        <div className="container">
                            <div className="">
                                <div className="">
                                    <div className="widget footer_widget">
                                        <h5 className="footer-title">Adresse</h5>
                                        <p className="padress">CCI Paris Ile-de-France: 27 Avenue de Friedland,
                                            75008
                                            Paris</p>
                                        <p className="padress">Métropole du Grand Paris: 17 Avenue Pierre Mendès,
                                            75013
                                            Paris</p>
                                    </div>
                                    <a target="_blank" href="https://www.metropolegrandparis.fr/fr"><img
                                        className="logoccimgp"
                                        src="https://www.metropolegrandparis.fr/themes/custom/customer/logo.svg"
                                        alt="mgp"/></a>
                                    <a target="_blank" href="https://www.cci-paris-idf.fr/fr"><img
                                        className="logoccimgp ccilogofooter"
                                        src="CCI%20Paris%20IDF%20RVB%20negatif_SF.png"
                                        alt="cci"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="containerback">

                                <div className="">
                                    <div className="footer-site-info">2020 ©
                                        <a id="mentionslegales"
                                           href="https://metropolegrandparis.fr/fr/mentions-legales-150"
                                           target="_blank"
                                        > mentions légales </a>
                                    </div>
                                </div>

                                <div className="divreaseau">

                                    <div>

                                        <div className="connect">

                                            <a className="share facebook"
                                               href="https://www.facebook.com/MetropoleGrandParis/" rel="author"
                                               target="_blank">
                                                <img className="iconfooter" src="facebook.svg"/>
                                                <span className="clip">FACEBOOK</span>

                                            </a>

                                            <a className="share facebook Linkedin"
                                               href="https://www.linkedin.com/company/m%C3%A9tropoledugrandparis/?originalSubdomain=fr"
                                               rel="author" target="_blank">
                                                <img className="iconfooter" src="linkedin.svg"/>
                                                <span className="clip">LINKEDIN</span>

                                            </a>
                                            <a className="share youtube instagram"
                                               href="https://www.linkedin.com/company/m%C3%A9tropoledugrandparis/?originalSubdomain=fr"
                                               rel="author" target="_blank">
                                                <img className="iconfooter" src="instagram.svg"/>
                                                <span className="clip">INSTAGRAM</span>

                                            </a>

                                            <a className="share  youtube"
                                               href="https://www.youtube.com/channel/UCOA4MiI4UcpvqHT7R6sm1cA"
                                               target="_blank">
                                                <img className="iconfooter" src="youtube.svg"/>
                                                <span className="clip">YOU-TUBE</span>

                                            </a>

                                        </div>
                                    </div>
                                </div>


                                <div className="">
                                    <nav className=" "
                                         id="footer-navigation"
                                         role="navigation">
                                        <ul className="" id="footer-menu">

                                            <li className="menu-item-26"
                                                id="menu-item-26"><a
                                                className="menu-item-26"
                                                href="/">ACTUALITES DU RESEAU</a></li>

                                            <li className="menu-item-26"
                                                id="menu-item-26"><a
                                                className="menu-item-26"
                                                href="/MediaDoc">MEDIATHEQUE</a></li>

                                            <li className="menu-item-27"
                                                id="menu-item-27"><a
                                                href="/Animation">ECHANGES ET PARTAGES</a></li>
                                            <li className="menu-item-28"
                                                id="menu-item-28"><a
                                                href="/Contact">ANNUAIRE</a></li>
                                            <li className="menu-item-29"
                                                id="menu-item-29"><a
                                                href="/Partenaire">PARTENAIRES</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
