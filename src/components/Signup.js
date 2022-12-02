import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <header>
        <ul className="menu-bar">
          <a href="/"><img
              alt="logo mgp"
              src="https://www.metropolegrandparis.fr/themes/custom/customer/logo.svg"/></a>
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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">S'inscrire</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirmation mot de passe</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">S'inscrire</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Connexion</Link>
      </div>
    </>
  )
}
