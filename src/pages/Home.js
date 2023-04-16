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
                <h1 className='companyName'>{company}</h1>
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
    @import url('https://fonts.googleapis.com/css2?family=Amiko&family=Oswald:wght@600&family=Shadows+Into+Light&display=swap');
    color: white;
    text-shadow: 2px 1px 2px black;
    padding-top: 4rem;
    text-align: center;
    height: 4rem;
    text-transform: uppercase;
    font-family: 'Oswald', sans-serif;
    font-size: 15rem;
`

const Slogan = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Amiko&family=Oswald:wght@600&family=Shadows+Into+Light&display=swap');
    color: white;
    text-shadow: 2px 2px 2px black;

    text-align: center;
    height: 4rem;
    padding-top: 4rem;
`
const Button = styled.button`
    background-color: rgba(28, 55, 96, 0.9);

    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 50px;
    height: 45px;
    border-radius: 10px;
    font-size: 16px;
    margin: 5rem auto;

    filter: drop-shadow(16px 13px 4px rgba(0, 0, 0, 0.25));
`
