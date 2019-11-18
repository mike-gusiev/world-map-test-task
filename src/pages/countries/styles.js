import styled from 'styled-components'

export const ErrorWrapper = styled('div')`
    position: absolute;
    width: 60%;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid ${({theme}) => theme.colors.grayColor};
    border-radius: 12px;
    padding: 50px 30px;
    text-align: center;
    font-family: 'OpenSans';
`

export const LoaderWrapper = styled('div')`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`