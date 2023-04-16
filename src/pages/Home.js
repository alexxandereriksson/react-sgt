import styled from 'styled-components'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataInfo from '../components/DataInfo'

function Home() {
    const toForm = '/offert'
    const data = useContext(DataInfo)
    const company = data.map((item) => item.companyName)
    const slogan = data.map((item) => item.slogan)
    return (
        <Wrap>
            <Title>
                <h1 className="companyName">{company} </h1>
            </Title>
            <Slogan>
                <h3>{slogan}</h3>
            </Slogan>

            <Button>
                <Link className="offertTag" to={toForm}>
                Gratis offert
                </Link>
            </Button>
        </Wrap>
    )
}

export default Home

const Wrap = styled.div`
    background-image: url('/images/pexels-ivan-188679.jpg');
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: 0.1rem solid black;


`
const Title = styled.div`
    color: white;
    text-shadow: 5px 5px 5px black;
    padding-top: 4rem;
    text-align: center;
    height: 4rem;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 15rem;
`

const Slogan = styled.div`
    color: white;
    text-shadow: 5px 2px 3px black;
    text-transform: uppercase;
    text-align: center;

    font-family: 'Oswald', sans-serif;
    padding-top: 5rem;
`
const Button = styled.button`
    background-color: rgba(29, 60, 120, 1);
    font-family: 'Oswald', sans-serif;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    height: 45px;
    border-radius: 10px;
    font-size: 16px;
    margin: 11rem auto;
    filter: drop-shadow(10px 15px 4px rgba(29, 60, 120, 0.25));
`
