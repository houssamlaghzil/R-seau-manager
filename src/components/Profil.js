import React, {useState} from "react"
import {Alert, Button} from "react-bootstrap"
import {AuthProvider, useAuth} from "../contexts/AuthContext"
import {BrowserRouter as Router, Link, Route, Switch, useHistory} from "react-router-dom"

import '../asset/css/style.css'
import '../asset/css/dashboard/dashboard.css'
import '../asset/css/headerReboot.css'
import '../asset/css/cssimg/cssimg.css'
import '../asset/css/Profil/Profil.css'

import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Profil from "./Profil";
import Signup from "./Signup";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
//import Iframe from "react-iframe";
import '../asset/css/style.css'
import '../asset/css/Profil/Profil.css'
import '../asset/css/headerReboot.css'
//import Iframe from "react-iframe";


export default function Profile() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/")
            window.location.reload();
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <>
            <header>
                <ul className="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="logo mgp"
                             src="Bloc marque MGP + CVV.png"/>
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
                    <a href="/Contact">
                        <li>ANNUAIRE</li>
                    </a>
                    <a href="/Partenaire">
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

            <div className="divlog" id="divlog_id">
                <div className="card">
                    <div className="card-body"><h2 id="h2" className="h2">Profil</h2>

                        {error && <Alert variant="danger">{error}</Alert>}
                        <strong>Email:</strong> <p className="emailp">{currentUser.email}</p>
                        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                            modifier votre mot de passe
                        </Link>

                        <div className="text-center mt-2 linkbutton buttonUpdate">
                            <a to="/"><Button className="buttonLogout" variant="link" onClick={handleLogout}>
                                DECONNECTER
                            </Button></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


