import styled from 'styled-components'
import React, { useContext } from 'react'
import DataInfo from './DataInfo'
import { Link } from 'react-router-dom'

function Home() {
    const toForm = '/offert'
    const data = useContext(DataInfo)
    const company = data.map((item) => item.companyName)
    const slogan = data.map((item) => item.slogan)
    return (
        <Wrap>
            <Title>
                <h1>{company}</h1>
            </Title>
            <Slogan>
                <h2>{slogan}</h2>
            </Slogan>
            <Link to={toForm}>
                <Button>Gratis offert</Button>
            </Link>
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
`
const Title = styled.div`
    color: black;
    padding-top: 1rem;
    text-align: center;
    height: 4rem;
`

const Slogan = styled.div`
    color: black;
    text-align: center;
    height: 4rem;
`
const Button = styled.button`
    background-color: rgba(28, 55, 96, 0.9);
    color: white;
    display: flex;
    padding: 10px 50px;
    border-radius: 10px;
    font-size: 16px;
    margin: auto;
    filter: drop-shadow(16px 13px 4px rgba(0, 0, 0, 0.25));
`
