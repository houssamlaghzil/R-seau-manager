import React from "react"


import '../asset/css/style.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'
import '../asset/css/partenaires/partenaires.css'

export default function Partenaires() {

    return (
        <>
            <header>
                <ul className="menu-bar">
                    <a className="contact" href="/">
                        <img id="logomgphead" alt="logo mgp" src="/Bloc marque MGP + CVV.png"/>
                    </a>
                    <a href="/Actuality">
                        <li>ACTUALITES DU RESEAU</li>
                    </a>
                    <a href="/MediaDoc">
                        <li>MEDIATHEQUE</li>
                    </a>
                    <a href="/Animation">
                        <li>ECHANGES ET PARTAGES</li>
                    </a>
                    <a href="/contact">
                        <li>ANNUAIRE</li>
                    </a>
                    <a href="/Partenaire">
                        <li id="headselect">PARTENAIRES</li>
                    </a>
                    <a className="contact" href="/profil">
                        <div className="tooltipDASH contact">
                            <img className="contact" id="logoprofilhead" alt="logo profil"
                                 src="/user_profile_icon_176439.svg"/>
                        </div>
                    </a>
                </ul>
            </header>


            <div className="flexbox">
                <div className="itempartenaire">
                    <a target="_blank" href="https://adac-idf.fr"><img
                        src="https://adac-idf.fr/wp-content/uploads/2020/04/Logo-Adac-entete.png"/></a>
                </div>
                <div className="itempartenaire">
                    <a target="_blank" href="https://agence-cohesion-territoires.gouv.fr"><img
                        src="https://agence-cohesion-territoires.gouv.fr/sites/default/files/styles/wysiwyg/public/2020-05/ANCT_Logo.png?itok=7ZF9hIJR"/></a>
                </div>
                <div className="itempartenaire">
                    <a target="_blank" href="https://www.apur.org/fr"><img
                        src="https://www.apc-paris.com/sites/www.apc-paris.com/files/styles/annuaire_carre/public/file_fields/logo_structure/logo-apur-txt-dessous_0.jpg?itok=lUFwYNR-"/></a>
                </div>
                <div className="itempartenaire">
                    <a target="_blank" href="https://www.banquedesterritoires.fr/"><img
                        src="https://www.parcs-naturels-regionaux.fr/sites/federationpnr/files/image/partenaire/banque_territoires_logo_endos_vertical_pos_rvb.jpg"/></a></div>
                <div className="itempartenaire">
                    <a target="_blank" href="https://www.cci-paris-idf.fr/fr#1">
                    <img src="https://upload.wikimedia.org/wikipedia/fr/7/7d/Logo_CCI_Paris_%C3%8Ele-de-France.svg"/>
                    </a>
                </div>
                <div className="itempartenaire">
                    <a target="_blank" href="https://www.centre-ville.org">
                    <img src="https://www.centre-ville.org/wp-content/uploads/2020/07/img-cvm-logo-400x400-1.png"/>
                    </a>
                </div>
                <div className="itempartenaire">
                    <a target="_blank" href="https://www.institutparisregion.fr/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/LogoLinstitutParisRegion.png"/>
                    </a>
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