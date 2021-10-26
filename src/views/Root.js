import React from 'react'
import styled from 'styled-components'
import MainTemplate from '../templates/MainTemplate'

const StyledWrapper = styled.div`
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    width: 95vw;
    height: 95vh;
    border: 1px solid tomato;

    background-color: #000000;
    background-image: linear-gradient(315deg, #000000 0%, #414141 74%)

    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.8);
    border-radius: .5%;
    color: #BDBDBD;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    @media (max-width: 960px){
        border: none;
        background-color: cornsilk;
        
    }
`
const Root = () => (
    <MainTemplate>
    <StyledWrapper>
        <></>
    </StyledWrapper>
    </MainTemplate>
)
export default Root