import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Africa } from '../../../assets/icons/globe-africa.svg';
import { ReactComponent as Americas } from '../../../assets/icons/globe-americas.svg';
import { ReactComponent as Asia } from '../../../assets/icons/globe-asia.svg';
import { ReactComponent as Europe } from '../../../assets/icons/globe-europe.svg';
import { ReactComponent as Oceania } from '../../../assets/icons/globe.svg';

const getSvgContent = (color) => `width: 35px; path{fill: ${color}}`

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

export const StyledNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    
    &:hover {
        text-decoration: none;
    }
`

export const StyledText = styled('span')`
    text-transform: capitalize;
    font-family: 'OpenSans';
    text-decoration: none;
    color: ${({theme}) => theme.colors.grayColor};
    font-size: ${({theme}) => theme.fontSizes.medium};
`

export const RegionWrapper = styled('div')`
    display: flex;
    justify-content: center;
    cursor: initial;
`

export const AfricaIcon = styled(Africa)`
   ${({color}) => getSvgContent(color)}
`

export const AmericaIcon = styled(Americas)`
   ${({color}) => getSvgContent(color)}
`

export const AsiaIcon = styled(Asia)`
    ${({color}) => getSvgContent(color)}
`

export const EuropeIcon = styled(Europe)`
    ${({color}) => getSvgContent(color)}
`

export const OceaniaIcon = styled(Oceania)`
    ${({color='green'}) => getSvgContent(color)}
`