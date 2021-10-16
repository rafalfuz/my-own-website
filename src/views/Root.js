import React from 'react'
import styled from 'styled-components'
import MainTemplate from '../templates/MainTemplate'

const StyledWrapper = styled.div`
    position: absolute;
    left: 50%;
    top :50%;
    transform: translate(-50%, -50%);
    width: 90vw;
    height: 80vh;
    background-color: white;
`
const Root = () => (
    <MainTemplate>
    <StyledWrapper>
        <></>
    </StyledWrapper>
    </MainTemplate>
)
export default Root