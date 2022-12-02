import React, {Component, useState} from "react"
import firebase from "firebase";
import AdminActu from "../asset/js/AdminActu";
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import ReactDOM from "react-dom"


import '../asset/css/style.css'
import '../asset/css/actuality2/actuality2.css'
import '../asset/css/footer.css'
import '../asset/css/cssimg/cssimg.css'
import Firebasedataarticle from "../asset/js/Firebasearticle";
import {findAllByTestId} from "@testing-library/react";


export default class Admin extends React.Component {


    state = {
        IMG1: "",
        CONTENU1: "",
        TITRE1: "",
        LIEN1: "",

        IMG2: "",
        CONTENU2: "",
        TITRE2: "",
        LIEN2: "",

        IMG3: "",
        CONTENU3: "",
        TITRE3: "",
        LIEN3: "",

        IMG4: "",
        CONTENU4: "",
        TITRE4: "",
        LIEN4: "",

        IMG5: "",
        CONTENU5: "",
        TITRE5: "",
        LIEN5: "",

        IMG6: "",
        CONTENU6: "",
        TITRE6: "",
        LIEN6: "",

        IMG7: "",
        CONTENU7: "",
        TITRE7: "",
        LIEN7: "",

        IMG8: "",
        CONTENU8: "",
        TITRE8: "",
        LIEN8: "",

        IMG9: "",
        CONTENU9: "",
        TITRE9: "",
        LIEN9: "",

        IMG10: "",
        CONTENU10: "",
        TITRE10: "",
        LIEN10: "",
        EventDATE1: "",
        TypeOfEvent1: "",
        TITREProg1: "",
        LIENProg1: "",
        orgProg1: "",

        EventDATE2: "",
        TypeOfEvent2: "",
        TITRE2Prog: "",
        LIENProg2: "",
        orgProg2: "",

        EventDATE3: "",
        TypeOfEvent3: "",
        TITREProg3: "",
        LIENProg3: "",
        orgProg3: "",

        EventDATE4: "",
        TypeOfEvent4: "",
        TITREProg4: "",
        LIENProg4: "",
        orgProg4: "",

        EventDATE5: "",
        TypeOfEvent5: "",
        TITREProg5: "",
        LIENProg5: "",
        orgProg5: "",

        EventDATE6: "",
        TypeOfEvent6: "",
        TITREProg6: "",
        LIENProg6: "",
        orgProg6: "",

        EventDATE7: "",
        TypeOfEvent7: "",
        TITREProg7: "",
        LIENProg7: "",
        orgProg7: "",

        EventDATE8: "",
        TypeOfEvent8: "",
        TITREProg8: "",
        LIENProg8: "",
        orgProg8: "",

        EventDATE9: "",
        TypeOfEvent9: "",
        TITREProg9: "",
        LIENProg9: "",
        orgProg9: "",

        EventDATE10: "",
        TypeOfEvent10: "",
        TITREProg10: "",
        LIENProg10: "",
        orgProg10: "",
        Button: "",
    }


    render() {
        return (
            <body id="bodyactu">

            <header>
                <ul className="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="logo mgp"
                             src="/Bloc marque MGP + CVV.png"/>
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
                        <li>PARTENAIRES</li>
                    </a>
                </ul>
            </header>

            <h1 className="h1page pagetitleActu">ADMIN</h1>
            <script src={AdminActu.adminActu()}>
            </script>

            <div id="adminpagediv">
                <div id="adminUpdate">

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 1
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE1: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 1
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU1: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 1
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG1: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 1
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN1: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata1}>Publier</button>


                            <br/>
                        </div>

                        <div id="LIEN1" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN1}>
                                <li class="actularge" id="article1">

                                    <img id="IMG" className="imgatelier2" src={this.state.IMG1} alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE1} </h3>
                                    <p id="CONTENU">{this.state.CONTENU1}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>

                        {/*<br/>
                    <div id="CONTENU1"></div>

                    <br/>*/}
                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 2
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE2: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 2
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU2: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 2
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG2: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 2
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN2: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata2}>Publier</button>


                            <br/>
                        </div>

                        <div id="LIEN2" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN2}>

                                <li id="article2">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG2}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE2} </h3>
                                    <p id="CONTENU">{this.state.CONTENU2}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>

                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 3
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE3: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 3
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU3: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 3
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG3: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 3
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN3: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata3}>Publier</button>


                            <br/>
                        </div>

                        <div id="LIEN3" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN3}>
                                <li id="article3">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG3}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE3} </h3>
                                    <p id="CONTENU">{this.state.CONTENU3}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>

                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 4
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE4: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 4
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU4: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 4
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG4: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 4
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN4: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata4}>Publier</button>


                        </div>

                        <div id="LIEN4" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN4}>
                                <li class="actularge" id="article4">

                                    <img id="IMG" className="imgatelier2" src={this.state.IMG4} alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE4} </h3>
                                    <p id="CONTENU">{this.state.CONTENU4}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>

                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 5
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE5: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 5
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU5: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 5
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG5: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 5
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN5: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata5}>Publier</button>


                            <br/>
                        </div>

                        <div id="LIEN5" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN5}>
                                <li id="article5">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG5}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE5} </h3>
                                    <p id="CONTENU">{this.state.CONTENU5}</p>

                                    <button>lire plus</button>

                                </li>
                            </a>
                        </div>


                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 6
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE6: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 6
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU6: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 6
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG6: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 6
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN6: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata6}>Publier</button>


                        </div>

                        <div id="LIEN6" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN6}>
                                <li id="article6">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG6}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE6} </h3>
                                    <p id="CONTENU">{this.state.CONTENU6}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>


                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 7
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE7: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 7
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU7: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 7
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG7: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 7
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN7: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata7}>Publier</button>


                        </div>

                        <div id="LIEN7" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN7}>
                                <li class="actularge" id="article7">

                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG7}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE7} </h3>
                                    <p id="CONTENU">{this.state.CONTENU7}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>


                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 8
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE8: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 8
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU8: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 8
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG8: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 8
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN8: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata8}>Publier</button>


                        </div>

                        <div id="LIEN8" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN8}>
                                <li id="article8">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG8}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE8} </h3>
                                    <p id="CONTENU">{this.state.CONTENU8}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>


                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 9
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE9: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 9
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU9: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 9
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG9: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 9
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN9: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata9}>Publier</button>


                        </div>
                        <div id="LIEN9" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN9}>
                                <li id="article9">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG9}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE9} </h3>
                                    <p id="CONTENU">{this.state.CONTENU9}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>


                    </div>

                    <div className="admin">
                        <div className="inputadmin">
                            <label class="labeladmin">TITRE 10
                                <input className="admininput" placeholder="texte du titre"
                                       onChange={e => this.setState({TITRE10: e.target.value})}/>
                            </label>

                            <label class="labeladmin">CONTENU 10
                                <input className="admininput" placeholder="texte du sous titre"
                                       onChange={e => this.setState({CONTENU10: e.target.value})}/>
                            </label>

                            <label class="labeladmin">IMAGE 10
                                <input className="admininput" placeholder="url de l'image"
                                       onChange={e => this.setState({IMG10: e.target.value})}/>
                            </label>

                            <label class="labeladmin">LIEN 10
                                <input className="admininput" placeholder="url de l'article"
                                       onChange={e => this.setState({LIEN10: e.target.value})}/>
                            </label>
                            <button className="adminbutton" onClick={Admin.pushgata10}>Publier</button>


                        </div>
                        <div id="LIEN10" className="CONTENU">
                            <a target="_blank" href={this.state.LIEN10}>
                                <li class="actularge" id="article10">
                                    <img id="IMG" className="imgatelier2"
                                         src={this.state.IMG10}
                                         alt="imgcrocis"/>
                                    <h3 id="TITRE">{this.state.TITRE10} </h3>
                                    <p id="CONTENU">{this.state.CONTENU10}</p>

                                    <button>lire plus</button>
                                </li>
                            </a>
                        </div>


                    </div>

                </div>

                <div className="agenda agenda2 right-div" id="adminUpdatePrograme">

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 1
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE1: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 1
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent1: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 1
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg1: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 1
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg1: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 1
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg1: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme1}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg1} id="dataprog1">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE1}</h1>
                                <h2>{this.state.TypeOfEvent1}</h2>
                                <h3>{this.state.TITREProg1}</h3>
                                <p>
                                    {this.state.orgProg1}
                                </p>
                                <a target="_blank" href={this.state.LIENProg1}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>
                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 2
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE2: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 2
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent2: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 2
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg2: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 2
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg2: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 2
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg2: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme2}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg2} id="dataprog2">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE2}</h1>
                                <h2>{this.state.TypeOfEvent2}</h2>
                                <h3>{this.state.TITREProg2}</h3>
                                <p>
                                    {this.state.orgProg2}
                                </p>
                                <a target="_blank" href={this.state.LIENProg2}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>
                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 3
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE3: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 3
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent3: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 3
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg3: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 3
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg3: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 3
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg3: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme3}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg3} id="dataprog3">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE3}</h1>
                                <h2>{this.state.TypeOfEvent3}</h2>
                                <h3>{this.state.TITREProg3}</h3>
                                <p>
                                    {this.state.orgProg3}
                                </p>
                                <a target="_blank" href={this.state.LIENProg3}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>


                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 4
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE4: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 4
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent4: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 4
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg4: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 4
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg4: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 4
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg4: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme4}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg4} id="dataprog4">
                            <li id="dataprog4">
                                <h1 className="atelier deux">{this.state.EventDATE4}</h1>
                                <h2>{this.state.TypeOfEvent4}</h2>
                                <h3>{this.state.TITREProg4}</h3>
                                <p>
                                    {this.state.orgProg4}
                                </p>
                                <a target="_blank" href={this.state.LIENProg4}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>

                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 5
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE5: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 5
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent5: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 5
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg5: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 5
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg5: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 5
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg5: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme5}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg5} id="dataprog5">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE5}</h1>
                                <h2>{this.state.TypeOfEvent5}</h2>
                                <h3>{this.state.TITREProg5}</h3>
                                <p>
                                    {this.state.orgProg5}
                                </p>
                                <a target="_blank" href={this.state.LIENProg5}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>

                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 6
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE6: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 6
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent6: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 6
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg6: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 6
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg6: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 6
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg6: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme6}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg6} id="dataprog6">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE6}</h1>
                                <h2>{this.state.TypeOfEvent6}</h2>
                                <h3>{this.state.TITREProg6}</h3>
                                <p>
                                    {this.state.orgProg6}
                                </p>
                                <a target="_blank" href={this.state.LIENProg6}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>
                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                            <label class="labeladmin">DATE 7
                                <input className="admininputprog" placeholder="jj/Mois/aa"
                                       onChange={e => this.setState({EventDATE7: e.target.value})}/>
                            </label>

                            <label class="labeladmin">Type 7
                                <input className="admininputprog" placeholder="Atelier ou Formation"
                                       onChange={e => this.setState({TypeOfEvent7: e.target.value})}/>
                            </label>

                            <label class="labeladmin">TITRE 7
                                <input className="admininputprog" placeholder="text du titre"
                                       onChange={e => this.setState({TITREProg7: e.target.value})}/>
                            </label>

                            <label class="labeladmin">organisateur 7
                                <input className="admininputprog" placeholder="organisme organisateur"
                                       onChange={e => this.setState({orgProg7: e.target.value})}/>
                            </label>
                            <br/>
                            <label class="labeladmin">LIEN 7
                                <input className="admininputprog" placeholder="url du Gform d'inscription"
                                       onChange={e => this.setState({LIENProg7: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme7}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg7} id="dataprog7">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE7}</h1>
                                <h2>{this.state.TypeOfEvent7}</h2>
                                <h3>{this.state.TITREProg7}</h3>
                                <p>
                                    {this.state.orgProg7}
                                </p>
                                <a target="_blank" href={this.state.LIENProg7}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>
                    </div>

                    <div className="admin">
                        <div className="inputadminprog">
                                <label class="labeladmin">DATE 8
                                    <input className="admininputprog" placeholder="jj/Mois/aa"
                                           onChange={e => this.setState({EventDATE8: e.target.value})}/>
                                </label>

                                <label class="labeladmin">Type 8
                                    <input className="admininputprog" placeholder="Atelier ou Formation"
                                           onChange={e => this.setState({TypeOfEvent8: e.target.value})}/>
                                </label>

                                <label class="labeladmin">TITRE 8
                                    <input className="admininputprog" placeholder="text du titre"
                                           onChange={e => this.setState({TITREProg8: e.target.value})}/>
                                </label>

                                <label class="labeladmin">organisateur 8
                                    <input className="admininputprog" placeholder="organisme organisateur"
                                           onChange={e => this.setState({orgProg8: e.target.value})}/>
                                </label>

                                <label class="labeladmin">LIEN 8
                                    <input className="admininputprog" placeholder="url du Gform d'inscription"
                                           onChange={e => this.setState({LIENProg8: e.target.value})}/>
                                </label>
                            <button className="adminbuttonprog" onClick={Admin.pushgataprogramme8}>Publier</button>

                        </div>

                        <a target="_blank" href={this.state.LIENProg8} id="dataprog8">
                            <li>
                                <h1 className="atelier deux">{this.state.EventDATE8}</h1>
                                <h2>{this.state.TypeOfEvent8}</h2>
                                <h3>{this.state.TITREProg8}</h3>
                                <p>
                                    {this.state.orgProg8}
                                </p>
                                <a target="_blank" href={this.state.LIENProg8}>
                                    <button>inscription</button>
                                </a>
                            </li>
                        </a>
                    </div>

                    <div className="admin">
                        <div className="inputadminprog">

                            <label class="labeladmin">LIEN
                                <input onChange={e => this.setState({BUTTON: e.target.value})}/>
                            </label>
                            <button className="adminbuttonprog" onClick={Admin.pushdatabutton}>Publier</button>
                        </div>
                    </div>

                </div>
            </div>
            <p hidden="hidden">pour telecharger le json des utilisateur c'est <a href="https://drive.google.com/file/d/10SfKtMtS7eWVkYf7eWLtA8KEAiEaA07M/view?usp=sharing">ici</a></p>


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

            <script src={AdminActu.firebasedataarticle()}>
            </script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"/>
            <script src="https://code.jquery.com/ui/1.11.4/jquery-ui.js"/>
            <script src="https://daniellaharel.com/raindrops/js/raindrops.js"/>
            {/*<script src={Firebasedataarticle.firebasedataarticle()}>
            </script>*/}
            {/*<script src={Firebasedataarticle.firebasedataprogramme()}>
            </script>*/}
            </body>
        );
    }

    static pushgata1() {
        const dataLIEN1 = document.getElementById("LIEN1").innerHTML
        if (dataLIEN1 === '<a target="_blank" href=""><li id="article1"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if1");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU1").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN1);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU1").set("<div id=\"CONTENU1bis\">" + dataLIEN1 + "</div>");
        }
    }

    static pushgata2() {
        const dataLIEN2 = document.getElementById("LIEN2").innerHTML
        if (dataLIEN2 === '<a target="_blank" href=""><li id="article2"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if2");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU2").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN2);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU2").set("<div id=\"CONTENU1bis\">" + dataLIEN2 + "</div>");
        }
    }

    static pushgata3() {
        const dataLIEN3 = document.getElementById("LIEN3").innerHTML
        if (dataLIEN3 === '<a target="_blank" href=""><li id="article3"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if3");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU3").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN3);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU3").set("<div id=\"CONTENU1bis\">" + dataLIEN3 + "</div>");
        }
    }

    static pushgata4() {
        const dataLIEN4 = document.getElementById("LIEN4").innerHTML
        if (dataLIEN4 === '<a target="_blank" href=""><li id="article4"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if4");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU4").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN4);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU4").set("<div id=\"CONTENU1bis\">" + dataLIEN4 + "</div>");
        }
    }

    static pushgata5() {
        const dataLIEN5 = document.getElementById("LIEN5").innerHTML
        if (dataLIEN5 === '<a target="_blank" href=""><li id="article5"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if5");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU5").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN5);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU5").set("<div id=\"CONTENU1bis\">" + dataLIEN5 + "</div>");
        }
    }

    static pushgata6() {
        const dataLIEN6 = document.getElementById("LIEN6").innerHTML
        if (dataLIEN6 === '<a target="_blank" href=""><li id="article6"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if6");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU6").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN6);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU6").set("<div id=\"CONTENU1bis\">" + dataLIEN6 + "</div>");
        }
    }

    static pushgata7() {
        const dataLIEN7 = document.getElementById("LIEN7").innerHTML
        if (dataLIEN7 === '<a target="_blank" href=""><li id="article7"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if7");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU7").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN7);
            alert("attantion cette div va être mise a jour pour les utilisateur")
            firebase.database().ref().child("article").child("article1").child("CONTENU7").set("<div id=\"CONTENU1bis\">" + dataLIEN7 + "</div>");
        }
    }

    static pushgata8() {
        const dataLIEN8 = document.getElementById("LIEN8").innerHTML
        if (dataLIEN8 === '<a target="_blank" href=""><li id="article8"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if8");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU8").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN8);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU8").set("<div id=\"CONTENU1bis\">" + dataLIEN8 + "</div>");
        }

    }

    static pushgata9() {
        const dataLIEN9 = document.getElementById("LIEN9").innerHTML
        if (dataLIEN9 === '<a target="_blank" href=""><li id="article9"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if9");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article1").child("CONTENU9").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN9);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article1").child("CONTENU9").set("<div id=\"CONTENU1bis\">" + dataLIEN9 + "</div>");
        }
    }

    static pushgata10() {
        const dataLIEN10 = document.getElementById("LIEN10").innerHTML
        if (dataLIEN10 === '<a target="_blank" href=""><li id="article10"><img id="IMG" class="imgatelier2" src="" alt="imgcrocis"><h3 id="TITRE"> </h3><p id="CONTENU"></p><button>lire plus</button></li></a>') {
            console.log("if10");
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("article").child("article10").child("CONTENU10").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataLIEN10);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("article").child("article10").child("CONTENU10").set("<div id=\"CONTENU10bis\">" + dataLIEN10 + "</div>");
        }
    }


    static pushgataprogramme1() {
        const dataprogramme1 = document.getElementById("dataprog1").innerHTML
        if (dataprogramme1 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if1")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU1").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme1);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU1").set(dataprogramme1);
        }
    }

    static pushgataprogramme2() {
        const dataprogramme2 = document.getElementById("dataprog2").innerHTML
        if (dataprogramme2 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if2"+dataprogramme2)
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU2").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme2);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU2").set(dataprogramme2);
        }
    }

    static pushgataprogramme3() {
        const dataprogramme3 = document.getElementById("dataprog3").innerHTML
        if (dataprogramme3 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if3")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU3").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme3);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU3").set(dataprogramme3);
        }
    }

    static pushgataprogramme4() {
        const dataprogramme4 = document.getElementById("dataprog4").innerHTML
        if (dataprogramme4 === '<li id="dataprog4"><h1 class="atelier deux"></h1><h2></h2><h3></h3><p></p><a target="_blank" href=""><button>inscription</button></a></li>') {
            console.log("if4")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU4").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme4);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU4").set(dataprogramme4);
        }
    }

    static pushgataprogramme5() {
        const dataprogramme5 = document.getElementById("dataprog5").innerHTML
        if (dataprogramme5 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if5")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU5").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme5);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU5").set(dataprogramme5);
        }
    }

    static pushgataprogramme6() {
        const dataprogramme6 = document.getElementById("dataprog6").innerHTML
        if (dataprogramme6 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if6")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU6").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme6);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU6").set(dataprogramme6);
        }
    }

    static pushgataprogramme7() {
        const dataprogramme7 = document.getElementById("dataprog7").innerHTML
        if (dataprogramme7 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if7")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU7").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }

        } else {
            console.log(dataprogramme7);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU7").set(dataprogramme7);
        }


    }

    static pushgataprogramme8() {
        const dataprogramme8 = document.getElementById("dataprog8").innerHTML
        if (dataprogramme8 === "<li><h1 class=\"atelier deux\"></h1><h2></h2><h3></h3><p></p><a target=\"_blank\" href=\"\"><button>inscription</button></a></li>") {
            console.log("if8")
            const choix = window.confirm("Voulez-vous supprimer cette article ?");
            if (choix) {
                alert("suppression validée");
                firebase.database().ref().child("programme").child("CONTENU8").set("<li  hidden={true}></li>");
            } else {
                alert("suppression annulée");
            }
        } else {
            console.log(dataprogramme8);
            alert("attantion cette div va être mise a jour pour les utilisateur")

            firebase.database().ref().child("programme").child("CONTENU8").set(dataprogramme8);
        }
    }

    static pushdatabutton() {
        const databutton = document.getElementById("icondownload").innerHTML
        console.log(databutton);
        alert("attantion cette div va être mise a jour pour les utilisateur")
        firebase.database().ref().child("programme").child("BUTTON").set(databutton);
    }

}


