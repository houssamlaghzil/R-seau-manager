import React, {useState} from "react"
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import Firebasedataarticle from "../asset/js/Firebasearticle";

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import CookieConsent from "react-cookie-consent";


import '../asset/css/style.css'
import '../asset/css/dashboard/dashboard.css'
import '../asset/css/headerReboot.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'

import firebase from "firebase";
import {render} from "@testing-library/react";




export default function Dashboard() {


    /* Stop */

        return (
        <>
            <header>
                <ul className="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="logo mgp"
                             src="Bloc marque MGP + CVV.jpg"/>
                    </a>
                    <Link to="/Actuality">
                        <li>ACTUALITES DU RESEAU</li>
                    </Link>
                    <a href="/MediaDoc">
                        <li>MEDIATHEQUE</li>
                    </a>
                    <a href="/Animation">
                        <li>ECHANGES ET PARTAGES</li>
                    </a>
                    <a href="/Contact">
                        <li>ANNUAIRE</li>
                    </a>
                    <a href="/Partenaire">
                        <li>PARTENAIRES</li>
                    </a>
                    {/*<Link to="/profil">
                        <div class="tooltip">
                            <img id="logoprofilhead" alt="logo profil" src="user_profile_icon_176439.svg"/>
                        </div>
                        <span className="tooltiptext">Modification de mot de passe et déconnexion.</span>
                    </Link>*/}
                    <Link to="/profil">
                        <div className="tooltipDASH">
                            <img id="logoprofilhead" alt="logo profil" src="user_profile_icon_176439.svg"/>
                        </div>
                    </Link>
                </ul>
            </header>




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
                                        <p className="padress">Métropole du Grand Paris: 17 Avenue Pierre Mendès
                                            Paris
                                            75013</p>
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
                            <div className="">

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
                                                href="/page/actuality2.html">ACTUALITES DU RESEAU</a></li>

                                            <li className="menu-item-26"
                                                id="menu-item-26"><a
                                                className="menu-item-26"
                                                href="/page/mediaDoc.html">MEDIATHEQUE</a></li>

                                            <li className="menu-item-27"
                                                id="menu-item-27"><a
                                                href="/page/animation.html">ECHANGES ET PARTAGES</a></li>
                                            <li className="menu-item-28"
                                                id="menu-item-28"><a
                                                href="/contact">ANNUAIRE</a></li>
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

            <CookieConsent>Ce site Web utilise principalement les cookies pour stocker les visuels.</CookieConsent>

        </>
    );

}
