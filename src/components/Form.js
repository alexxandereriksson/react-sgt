import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Thanks from './Thanks.tsx'
function Forms({ offertHeader, infoText }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')
    const [error, setError] = useState({})
    const [isSubmitted, setIsSubmitted] = useState(false)
    function handleInput(e) {
        e.preventDefault()

        setError({}) // återställer alla befintliga felmeddelanden

        if (!name) {
            setError({ ...error, name: 'Fyll i ditt namn' })
        }
        if (!email) {
            setError({ ...error, email: 'Fyll i din email' })
        }

        if (!number) {
            setError({ ...error, number: 'Fyll i ditt nummer' })
        }
        if (!text) {
            setError({ ...error, text: 'Fyll i textfält med offertförfrågan!' })
        }
        if (name && email && number && text) {
            setIsSubmitted(true)
        }
    }
    return (
        <>
            {isSubmitted ? (
                 <Thanks  thanks="Tack för din offert!" />
            ) : (
                <Form className='myForm' onSubmit={handleInput}>
                    <h3>{offertHeader} </h3>
                    <h6>{infoText} </h6>

                    {}
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Namn:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Jane Doe"
                        />
                        {error.name && <span>{error.name}</span>}
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Telefon nummer:</Form.Label>
                        <Form.Control
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            type="number"
                            placeholder="070000000."
                        />
                        {error.number && <span>{error.number}</span>}
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                    >
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="name@example.com"
                        />
                        {error.email && <span>{error.email}</span>}
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Fyll i din offertförfrågan här:</Form.Label>
                        <Form.Control
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            as="textarea"
                            rows={4}
                        />
                        {error.text && <span>{error.text}</span>}
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            )}
        </>
    )
}

export default Forms
