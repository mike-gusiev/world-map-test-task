import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Globe } from 'assets/icons/globe.svg'

export const StyledHeader = styled('header')`
    font-family: 'OpenSans' !important;
`
export const StyledBrand = styled(NavLink)`
    &&&{
        font-size: ${({theme}) => theme.fontSizes.large};
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        text-transform: capitalize;
        transition: .3s all ease-in;
        cursor: pointer;
        color: rgba(255,255,255,0.8);

        &:hover {
            transform: scale(1.01);
            color: rgba(255,255,255,1);
        }
    }
`

export const StyledUppercaseWord = styled('span')`
    text-transform: uppercase;
`

export const StyledBrandText = styled('span')`
    padding-left: 5px;
`

export const StyledBrandImage = styled('img')`
    width: 30px;
`

export const StyledGlobeIcon = styled(Globe)`
    width: 25px;

    path {
        fill: ${({theme}) => theme.colors.brandLogoColor};
    }
`

export const StyledNavbarCollapse = styled(Navbar.Collapse)`
    justify-content: flex-end;
`
