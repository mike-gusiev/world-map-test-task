import styled from 'styled-components'

export const StyledWrapper = styled('div')`
    font-family: 'OpenSans';
    color: ${({theme}) => theme.colors.grayColor};
`

export const StyledUl = styled('ul')`
    list-style: none;
    text-align: left;
    padding: 10px;
`

export const StyledImage = styled('img')`
    display: inline-block;
    padding-left: 20px;
    width: 70px;
`

export const StyledTitle = styled('p')`
    font-size: ${({theme}) => theme.fontSizes.medium};
    text-decoration: underline;
`