import styled from 'styled-components'

export const StyledSectionHeaderWrapper = styled('div')`
    margin: 30px;
    padding: 30px;
    background-color: rgba(255,255,255,0.8);
    border: 2px solid ${({theme}) => theme.colors.grayColor};
    border-radius: 12px;
    box-shadow: -7px 9px 11px -7px rgba(0,0,0,0.65);
`

export const StyledSectionHeaderText = styled('p')`
    font-family: 'OpenSans';
    text-align: center;
    font-size: ${({theme}) => theme.fontSizes.medium};
`