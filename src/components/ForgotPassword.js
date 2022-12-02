import React, {useRef, useState} from "react"
import {Alert, Button, Card, Form} from "react-bootstrap"
import {useAuth} from "../contexts/AuthContext"
import {Link} from "react-router-dom"

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body className="renicard">
                    <h2 className="text-center mb-4 Réinitialisation">Réinitialisation du mot de passe</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    {message && <Alert variant="success">{message}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100 buttoncardreni" type="submit">
                            Réinitialisation du mot de passe
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3 buttonconnection">
                        <Link to="/login">Connexion</Link>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
