import React from 'react'
import PropTypes from 'prop-types'

import { regions } from 'utils/constants'
import { 
    StyledButton,
    AfricaIcon,
    AmericaIcon,
    EuropeIcon,
    RegionWrapper,
    AsiaIcon,
    OceaniaIcon,
    StyledText,
    StyledNavLink
} from './styles'

const getIcon = (name, color) => {
    let icon

    switch (name) {
        case regions.africa:
            icon = <AfricaIcon color={color} />
            break
        case regions.americas:
            icon = <AmericaIcon color={color} />
            break
        case regions.asia:
            icon = <AsiaIcon color={color} />
            break
        case regions.europe:
            icon = <EuropeIcon color={color} />
            break
        case regions.oceania:
            icon = <OceaniaIcon color={color} />
            break
        default:
            icon = <OceaniaIcon />
            break
    }

    return icon
}

const RegionItem = ({item}) => {
    const {name, color} = item;
    return (
        <RegionWrapper>
            <StyledButton color={color}>
                <StyledNavLink to={`${name}`}>
                    {getIcon(name, color)}
                    <StyledText>{name}</StyledText>
                </StyledNavLink>
            </StyledButton>
        </RegionWrapper>
    )
}

RegionItem.propTypes = {
    item: PropTypes.shape({
        color: PropTypes.string,
        name: PropTypes.string
    })
}

export default RegionItem
