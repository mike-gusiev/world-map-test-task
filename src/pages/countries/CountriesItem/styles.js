import styled from 'styled-components'

export const StyledSpan = styled('span')`
    padding: 5px;
`

export const StyledImage = styled('img')`
    width: 25px;
    height: 25px;
`

export const StyledLi = styled('li')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${({theme}) => theme.colors.grayColor};
    transition: .3s all ease-in;

    &:hover {
        transform: scale(1.05);
        background-color: white;
        box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
    }
`