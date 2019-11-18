import React from 'react'
import PropTypes from 'prop-types'

import { 
    StyledImage,
    StyledSpan,
    StyledLi
} from './styles'

const CountriesItem = ({name, population, flag, setSelectedCounty}) => {
    return (
        <StyledLi onClick={() => setSelectedCounty(name)}>
            <StyledImage src={flag} alt="country-flag"/>
            <StyledSpan>Name: {name}</StyledSpan>
            <StyledSpan>Population: {population}</StyledSpan>
        </StyledLi>
    )
}

CountriesItem.propTypes = {
    name: PropTypes.string,
    population: PropTypes.number,
    flag: PropTypes.string,
    setSelectedCounty: PropTypes.func
}

export default CountriesItem