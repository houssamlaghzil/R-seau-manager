import React, {useRef, useState} from "react"
import {Alert, Button, Card, Form} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"

import '../asset/css/home.css'
import '../asset/css/login.css'
import '../asset/css/cssimg/cssimg.css'
//import Iframe from "react-iframe";


export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (

        <>
            <head>
                <title>réseau des managers de centre-ville</title>
            </head>
            <header>
                <ul class="menu-bar" id="menu-bar">
                    <a href="/">
                        <img id="logomgphead" alt="réseau des managers de centre-ville"
                             src="Bloc marque MGP + CVV.png"
                        />
                    </a>
                </ul>
            </header>

            <h1 id="StrongH1"><strong>réseau métropolitain des managers de centre-ville </strong></h1>
            <h1 id="StrongH1"><strong>réseau centre-ville en mouvement</strong></h1>
            <h1 id="StrongH1"><strong>réseau centre-ville vivant</strong></h1>

            <div id="allPageLogin">
                <div className="divlog">
                    <Card>
                        <Card.Body>
                            <h2 className="titleConn">Je souhaite me connecter</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required/>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required/>
                                </Form.Group>
                                <Button disabled={loading} type="submit">
                                    Connexion
                                </Button>
                            </Form>
                            <div>
                                <Link to="/forgot-password">Mot de passe oublié?
                                </Link>
                            </div>
                            <h2 class="ceeation">Je souhaite créer un compte</h2>
                            <a target="_blank"
                               href="https://docs.google.com/forms/d/e/1FAIpQLScknpSc2Baaxo1M_7n5Pa24xKgh0chsbTFhH-2vYAAyN5cz7Q/viewform?usp=sf_link"
                               className="buttonLogIN" ><Button id="Inscription" type="submit">
                                Inscription
                            </Button> </a>
                        </Card.Body>
                    </Card>
                </div>
                <h1 className="hero"></h1>

            </div>

            <div className="info ">
                <p className="info">Bonjour et bienvenue sur le site du <strong>réseau métropolitain des managers de
                    centre-ville </strong>
                    animé par la Chambre de Commerce et d'Industrie de Paris Ile de France.<br/>Dans
                    cet
                    espace vous trouverez :<br/>
                    - des <strong>actualités</strong> en lien avec vos problématiques de terrain,<br/>
                    - un <strong>programme d'ateliers</strong> et<strong> de groupes de travail</strong> ainsi que les <strong>événements</strong> importants de l'année
                    <br/>- un espace <strong>médiathèque</strong> qui contient des ressources (documents, vidéos...) consultables à tout
                    moment<br/>
                    - un <strong>outil d'échange et d'animation</strong> du réseau au format réseau social (Slack)<br/>-
                    un <strong>annuaire</strong> des membres du réseau (managers, conseillers, partenaires...)<br/>
                </p>
            </div>

            <div class="">

                {/*<div className="editotitle">
                    <h1 className="editoh1 pagetitleDash">Mot d'accueil</h1>
                </div>
                <div id="divedito">

                    <div className="edito left-div">
                        <img className="imgedito"
                             src="PO - Copie.PNG"
                             alt="img edito"/>
                        <p>La vitalité des centres-villes et des quartiers est un enjeu social et économique
                            transversal qui mobilise chacun d’entre nous et s’inscrit pleinement dans les priorités
                            de la Métropole du Grand Paris. Dès 2018, la Métropole s’est engagée dans une
                            démarche de dynamisation des centralités urbaines à travers l’Appel à Manifestions
                            d’Intérêt « Centres-villes vivants ». En 2020, un des axes du plan de relance de la
                            Métropole du Grand Paris a été de soutenir le tissu économique et culturel de
                            proximité en accélérant la transition écologique, le développement des mobilités
                            douces et en luttant contre la fracture numérique. La Métropole du Grand Paris a donc
                            souhaité consolider son action en faveur de l’économie de proximité et la production
                            en ville par la mise en œuvre d’une nouvelle édition de « Centres-Villes Vivants » qui
                            a pour ambition d’être plus proche de nos concitoyens. Parmi les actions du
                            programme <strong>« Centres-villes vivants »</strong>, la création et l’animation <strong>d’un réseau
                            métropolitain des managers de commerce</strong> et de centre-ville avec la CCI Paris Ile-de-
                            France.<br/>
                            Bienvenue dans cet espace dédié aux managers de centres-villes responsables du
                            commerce, des services et des centres-villes vivants.
                        </p>
                    </div>

                    <div className="edito right-div">
                        <img className="imgedito"
                             src="Didier Kling.png"
                             alt="img edito"/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s.Ipsum has been the industry's standard dummy text ever
                            since the 1500s.</p>
                    </div>
                </div>*/}



            </div>

        </>
    )
}
