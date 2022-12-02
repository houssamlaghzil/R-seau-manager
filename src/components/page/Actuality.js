import React from "react"
import firebase from "firebase";
import Firebasedataarticle from "../../asset/js/Firebasearticle";
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import ReactDOM from 'react-dom';


import '../asset/css/style.css'
import '../asset/css/actuality2/actuality2.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'
import CookieConsent from "react-cookie-consent";


//import Iframe from "react-iframe";


export default function Actuality() {

    return (
        <html>

        <head>
            <title>Actualités du réseau</title>
        </head>

        <body id="bodyactu">

        <header>
            <ul class="menu-bar">
                <a href="/">
                    <img id="logomgphead" alt="logo mgp"
                         src="/Bloc marque MGP + CVV.png"/>
                </a>
                <a class="selcethead" href="/">
                    <li id="headselect">ACTUALITES DU RESEAU</li>
                </a>
                <a href="/page/mediaDoc.html">
                    <li>MEDIATHEQUE</li>
                </a>
                <a href="/page/animation.html">
                    <li>ECHANGES ET PARTAGES</li>
                </a>
                <a href="/page/contact.html">
                    <li>ANNUAIRE</li>
                </a>
                <a href="/page/partenaire.html">
                    <li>PARTENAIRES</li>
                </a>
                <Link to="/profil">
                    <div className="tooltipDASH">
                        <img id="logoprofilhead" alt="logo profil" src="user_profile_icon_176439.svg"/>
                        <span className="tooltiptextDASH">Modification de mot de passe et déconnexion.</span>
                    </div>
                </Link>
            </ul>
        </header>

        <pre id='object'>
            </pre>
        <script src={Firebasedataarticle.firebasedataarticle()}>
        </script>
        <script src={Firebasedataarticle.firebasedataprogramme()}>

        </script>


        <h1 id="news" class="hero firstdiv"></h1>
        <div class="agenda right-div">
            <h1 class="programme">Actualités</h1>
            <ul>
                {/* <li class="actularge" id="article1">
                        <a target="_blank" id="LIEN" href="https://www.cci-paris-idf.fr/fr/prospective/crocis">
                            <img id="IMG" class="imgatelier2"
                                 src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Logo-CROCIS-RVBversion2.jpg/1200px-Logo-CROCIS-RVBversion2.jpg"
                                 alt="imgcrocis"/>
                            <h3 id="TITRE">Les foncières</h3>
                            <p id="CONTENU">Centre ville en mouvement</p>

                            <button>lire plus</button>
                        </a>
                    </li>*/}

                <div id="CONTENU1"/>

                <div id="CONTENU2"/>

                <div id="CONTENU3"/>

                <div id="CONTENU4"/>

                <div id="CONTENU5"/>

                <div id="CONTENU6"/>

                <div id="CONTENU7"/>

                <div id="CONTENU8"/>

                <div id="CONTENU9"/>

                <div id="CONTENU10"/>
            </ul>
        </div>


        <div class="agenda agenda2 right-div">
            <h1 class="programme deux">Programme des événements</h1>
            <ul>
                <div id="ProgrammeCONTENU1">
                </div>
                <div id="ProgrammeCONTENU2">
                </div>

                <div id="ProgrammeCONTENU3">
                </div>
                <div id="ProgrammeCONTENU4">
                </div>
                <div id="ProgrammeCONTENU5">
                </div>
                <div id="ProgrammeCONTENU6">
                </div>
                <div id="ProgrammeCONTENU7">
                    <li  hidden={true}>
                    </li>
                </div>
                <div id="ProgrammeCONTENU8">
                    <li  hidden={true}>
                    </li>
                </div>
            </ul>
            <div id="icondownload"> </div>
        </div>

        <div class="page-wrapper">
            <footer>
                <div class="footer-top">
                    <div class="">

                    </div>
                    <div class="container">
                        <div class="">
                            <div class="">
                                <div class="widget footer_widget">
                                    <h5 class="footer-title">Adresse</h5>
                                    <p class="padress">CCI Paris Ile-de-France: 27 Avenue de Friedland,
                                        75008
                                        Paris</p>
                                    <p class="padress">Métropole du Grand Paris: 17 Avenue Pierre Mendès,
                                        75013
                                        Paris</p>
                                </div>
                                <a target="_blank" href="https://www.metropolegrandparis.fr/fr"><img
                                    class="logoccimgp"
                                    src="https://www.metropolegrandparis.fr/themes/custom/customer/logo.svg"
                                    alt="mgp"/></a>
                                <a target="_blank" href="https://www.cci-paris-idf.fr/fr"><img
                                    class="logoccimgp ccilogofooter"
                                    src="CCI%20Paris%20IDF%20RVB%20negatif_SF.png"
                                    alt="cci"/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="containerback">

                            <div class="">
                                <div class="footer-site-info">2020 ©
                                    <a id="mentionslegales"
                                       href="https://metropolegrandparis.fr/fr/mentions-legales-150"
                                       target="_blank"
                                    > mentions légales </a>
                                </div>
                            </div>

                            <div class="divreaseau">

                                <div>

                                    <div class="connect">

                                        <a class="share facebook"
                                           href="https://www.facebook.com/MetropoleGrandParis/" rel="author"
                                           target="_blank">
                                            <img class="iconfooter" src="facebook.svg"/>
                                            <span class="clip">FACEBOOK</span>

                                        </a>

                                        <a class="share facebook Linkedin"
                                           href="https://www.linkedin.com/company/m%C3%A9tropoledugrandparis/?originalSubdomain=fr"
                                           rel="author" target="_blank">
                                            <img class="iconfooter" src="linkedin.svg"/>
                                            <span class="clip">LINKEDIN</span>

                                        </a>
                                        <a class="share youtube instagram"
                                           href="https://www.linkedin.com/company/m%C3%A9tropoledugrandparis/?originalSubdomain=fr"
                                           rel="author" target="_blank">
                                            <img class="iconfooter" src="instagram.svg"/>
                                            <span class="clip">INSTAGRAM</span>

                                        </a>

                                        <a class="share  youtube"
                                           href="https://www.youtube.com/channel/UCOA4MiI4UcpvqHT7R6sm1cA"
                                           target="_blank">
                                            <img class="iconfooter" src="youtube.svg"/>
                                            <span class="clip">YOU-TUBE</span>

                                        </a>

                                    </div>
                                </div>
                            </div>


                            <div class="">
                                <nav class=" "
                                     id="footer-navigation"
                                     role="navigation">
                                    <ul class="" id="footer-menu">

                                        <li class="menu-item-26"
                                            id="menu-item-26"><a
                                            class="menu-item-26"
                                            href="/">ACTUALITES DU RESEAU</a></li>

                                        <li class="menu-item-26"
                                            id="menu-item-26"><a
                                            class="menu-item-26"
                                            href="/page/mediaDoc.html">MEDIATHEQUE</a></li>

                                        <li class="menu-item-27"
                                            id="menu-item-27"><a
                                            href="/page/animation.html">ECHANGES ET PARTAGES</a></li>
                                        <li className="menu-item-28"
                                            id="menu-item-28"><a
                                            href="/Contact">ANNUAIRE</a></li>
                                        <li class="menu-item-29"
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
        <CookieConsent>Ce site Web utilise principalement les cookies pour stocker les visuels.</CookieConsent>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
        <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"/>
        <script src="https://daniellaharel.com/raindrops/js/raindrops.js"/>
        </body>
        </html>



    );


}
