import React from 'react'
import DataInfo from '../components/DataInfo'
import { useContext } from 'react'
import styled from 'styled-components'
function Contact() {
    const data = useContext(DataInfo)
    const phone = data.map((item) => item.phoneNumber)
    const adress = data.map((item) => item.address)

    return (
        <Wrap>
            <IMG />
            <INFO>
                <p> Ring oss på:</p>
                <p> {phone}</p>
                <p>Du hittar oss här:</p>
                <p>{adress}</p>
            </INFO>
        </Wrap>
    )
}

export default Contact
const Wrap = styled.section`
    border: 0.1rem solid black;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const IMG = styled.img`
    background-image: url('/images/umit-yildirim-9OB46apMbC4-unsplash.jpg');
    height: 40vh;
    width: 60vw;
    max-width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`
const INFO = styled.div`
    border: 0.1rem solid black;
    width: 30rem;
    height: 10rem;
    margin: 1rem;
    text-align: center;
    background-color:  rgba(29, 60, 120,1);
    color: white;
    font-weight: 600;
`
