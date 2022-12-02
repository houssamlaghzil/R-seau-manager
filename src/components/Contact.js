import React from "react"


import Firebasedatacontact from "../asset/js/Firebasedatacontact";
import '../asset/css/style.css'
import '../asset/css/animation/animation.css'
import '../asset/css/contact/contact.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'
import Firebasedataarticle from "../asset/js/Firebasearticle";
import ReactDOM from "react-dom";
import App from "./App";

function Iframe(props) {
    return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
}

export default function Contact() {
    const iframe= '<iframe referrerpolicy="no-referrer-when-downgrade" height="900px" width="100%" style="border:none;" src="https://view-awesome-table.com/-MsjfkEsCq4RtFPojHAh/view"></iframe>'

    return (
        <>
        <head >
            <meta  charSet="UTF-8"/>
            <title >Annuaire</title>
            <link  href="/__4aZ3Gw_400x400.jpg" rel="icon"/>
            <meta  content="width=device-width, initial-scale=1" name="viewport"/>
            <meta content="#000000" name="theme-color"/>
            <meta
                  content="Web site created using create-react-app"
                  name="description"
            />
            <link  href="/__4aZ3Gw_400x400.jpg" rel="apple-touch-icon"/>

            <link  href="/manifest.json" rel="manifest"/>

            <link  href="css/animation/animation.css" rel="stylesheet"/>
            <link  href="css/home.css" rel="stylesheet"/>
            <link  href="css/cssimg/cssimg.css" rel="stylesheet"/>
            <link  href="css/footer.css" rel="stylesheet"/>
            <link  href="css/header.css" rel="stylesheet"/>

        </head>
        <body className="contact">
        <script className="contact" src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js"/>

        <header className="contact">
            <ul className="contact" className="menu-bar">
                <a className="contact" href="/">
                    <img id="logomgphead" alt="logo mgp" src="/Bloc marque MGP + CVV.png"/>
                </a>
                <a className="contact" href="/Actuality">
                    <li>ACTUALITES DU RESEAU</li>
                </a>
                <a className="contact" href="/MediaDoc">
                    <li>MEDIATHEQUE</li>
                </a>
                <a className="contact" href="/Animation">
                    <li>ECHANGES ET PARTAGES</li>
                </a>
                <a className="contact" href="/contact">
                    <li id="headselect">ANNUAIRE</li>
                </a>
                <a className="contact" href="/Partenaire">
                    <li>PARTENAIRES</li>
                </a>
                <a className="contact" href="/profil">
                    <div className="tooltipDASH contact">
                        <img className="contact" id="logoprofilhead" alt="logo profil"
                             src="/user_profile_icon_176439.svg"/>
                    </div>
                </a>
            </ul>
        </header>
        <Iframe iframe={iframe}/>

       {/* <a href="/add" className="btn btn-1">inscription a l'annuaire</a>*/}

        <div className="page-wrapper contact">
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
                                    <p className="padress">Métropole du Grand Paris: 17 Avenue Pierre
                                        Mendès,
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
                                            href="/page/mediaDoc.html">MEDIATHEQUE</a></li>

                                        <li className="menu-item-27"
                                            id="menu-item-27"><a
                                            href="/page/animation.html">ECHANGES ET PARTAGES</a></li>
                                        <li className="menu-item-28"
                                            id="menu-item-28"><a
                                            href="/Contact">ANNUAIRE</a></li>
                                        <li className="menu-item-29"
                                            id="menu-item-29"><a
                                            href="/page/partenaire.html">PARTENAIRES</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>



        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
        <script src="http://code.jquery.com/ui/1.11.4/jquery-ui.js"/>

        <script src="https://daniellaharel.com/raindrops/js/raindrops.js"/>

        </body>
        </>

    );

    const rootElement = document.getElementById("root");
    ReactDOM.render(<App />, rootElement);


}
