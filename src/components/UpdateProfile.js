import React from "react"
import {Link} from "react-router-dom"

export default function UpdateProfile() {

    return (
        <>
            <header >
                <ul className="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="logo mgp" src="/Bloc marque MGP + CVV.png"/>
                    </a>
                    <a  href="/Actuality">
                        <li>ACTUALITES DU RESEAU</li>
                    </a>
                    <a  href="/MediaDoc">
                        <li>MEDIATHEQUE</li>
                    </a>
                    <a  href="/Animation">
                        <li>ECHANGES ET PARTAGES</li>
                    </a>
                    <a  href="/contact">
                        <li id="headselect">ANNUAIRE</li>
                    </a>
                    <a  href="/Partenaire">
                        <li>PARTENAIRES</li>
                    </a>
                    <a  href="/profil">
                        <div className="tooltipDASH contact">
                            <img  id="logoprofilhead" alt="logo profil"
                                 src="/user_profile_icon_176439.svg"/>
                        </div>
                    </a>
                </ul>
            </header>
            <div className="card">
                <div className="card-body"><h2 className="text-center mb-4">Modifier votre profile</h2>
                    <form className="">
                        <div id="email" className="form-group"><label className="form-label">Email</label><input
                            required=""
                            type="email"
                            className="form-control"
                            value="hlaghzil@gmail.com"/>
                        </div>
                        <div id="password" className="form-group"><label className="form-label">Mots de passe</label><input
                            placeholder="Laisser vide pour garder le même" type="password" className="form-control"/></div>
                        <div id="password-confirm" className="form-group"><label className="form-label">Confirmation de Mots de passe</label><input placeholder="Laisser vide pour garder le même" type="password"
                                                       className="form-control"/></div>
                        <button type="submit" className="w-100 btn btn-primary">modifier</button>
                    </form>
                </div>
            </div>
            <div className="w-100 text-center mt-2">
                <Link to="/">annuler</Link>
            </div>

        </>
)
}
