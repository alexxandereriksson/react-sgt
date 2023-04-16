import React from 'react'

import styled from 'styled-components'
import Form from '../components/Form'
function OffertForm() {
    return (
        <>
            <Section />

            <Form
                offertHeader="Välkommen till vårat offertformulär!"
                infoText="Fyll i dina uppgifter nedan, så återkopplar vi så snart vi kan, Tack! :)"
            />
        </>
    )
}

export default OffertForm

const Section = styled.section`
    background-image: url('/images/pexels-lena-sjö-10884323.jpg');

    width: 100%;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 70vh;
    border: 0.1rem solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
