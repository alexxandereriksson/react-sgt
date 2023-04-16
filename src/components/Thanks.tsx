import React from 'react'
import styled from 'styled-components'
interface ThanksProps {
    thanks: string
}
function Thanks(props: ThanksProps) {
    return (
        <>
            <Header> {props.thanks} <br/>
            Vi återkommer så snart vi kan!
            </Header>

        </>
    )
}

export default Thanks

const Header = styled.h1`
    border: 1px solid black;
    height: 50vh;
    text-align: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-weight: 800;
`
