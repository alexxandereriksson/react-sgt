import React from 'react'
import styled from 'styled-components'
function Home() {
    return <Wrap></Wrap>
}

export default Home

const Wrap = styled.div`
    background-image: url('/images/pexels-ivan-188679.jpg');
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    opacity: 0.6;
    top: -10vh;
`
