import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import MainTemplate from '../templates/MainTemplate'
import Paragraph from '../components/Paragraph'

const StyledWrapper = styled.div`
    position: absolute;
    left: 50%;
    top :50%;
    transform: translate(-50%, -50%);
    width: 95vw;
    height: 95vh;

    background-color: #000000;
    background-image: linear-gradient(15deg, #000000 0%, #414141 74%);

    box-shadow: 0 10px 30px -10px hsla(0,0%,0%,0.8);
    border-radius: .5%;
    color: #BDBDBD;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

const StyledBox = styled.div`
    height: 50px;
    width: 500px;

`


const Root = () => (
    <MainTemplate>
    <StyledWrapper>
        <Paragraph color="royalblue">
            In the process of creating
        </Paragraph>
        <StyledBox>
        <Box>
        <LinearProgress color='primary'/>
        </Box>
        </StyledBox>
    </StyledWrapper>
    </MainTemplate>
)
export default Root