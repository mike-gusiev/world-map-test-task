import styled from 'styled-components'
import { Container, Col } from 'react-bootstrap'

export const StyledContainer = styled(Container)`
    &&&{
        margin-top: 30px;
        width: 70%;
        min-height: 300px;
        border: 2px solid ${({theme}) => theme.colors.grayColor};
        padding: 20px;
        border-radius: 12px;
        background-color: rgba(255,255,255,0.8);
        box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
        font-family: 'OpenSans'
    }
`

export const StyledUl = styled('ul')`
    padding: 20px;
    max-height: 280px;
    overflow-y: scroll;
    width: 80%;
    list-style: none;
    margin: auto;
    box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
`

export const StyledTitle = styled('p')`
    padding: 5px;
`

export const StyledCol = styled(Col)`
    text-align: center;
`

export const StyledButton = styled('button')`
    max-width: 250px;
    width: 100%;
    padding: 10px 20px;
    border: 2px solid ${({color}) => color};
    border-radius: 12px;
    margin: 10px 0;
    box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
    transition: .3s all ease-in;
    
    &:hover{
        transform: scale(1.1);
    }
`
