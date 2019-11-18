import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'

import { 
    StyledImage,
    StyledWrapper,
    StyledTitle,
    StyledUl
} from './styles'

const SelectedCountryModal = ({country}) => {
    const {name,
        region,
        subregion,
        alpha2Code,
        alpha3Code,
        population,
        nativeName,
        flag,
        regionalBlocs,
        languages,
        area
    } = country

    return (
        <Fragment>
            <StyledWrapper>
                <StyledTitle>Info about country <StyledImage src={flag} alt="country-flag"/></StyledTitle>
                <Row>
                    <Col sm={6} xs={12}>
                        <StyledUl>
                            <li>Name: {name}</li>
                            <li>Region: {region}</li>
                            <li>Subregion: {subregion}</li>
                            <li>Population: {population}</li>
                            <li>NativeName: {nativeName}</li>
                            <li>RegionalBlocs: {regionalBlocs.map(item => 
                                <span key={item.acronym + Math.random()}>
                                    <span>{item.acronym}</span>
                                    <span>{item.name}</span>
                                </span>)}
                            </li>
                        </StyledUl>
                    </Col>
                    <Col sm={6} xs={12}>
                        <StyledUl>
                            <li>Alpha2Code: {alpha2Code}</li>
                            <li>Alpha3Code: {alpha3Code}</li>
                            <li>Languages: {languages.map(item =>
                                <span key={item.name + Math.random()}>{item.name}</span>)}
                            </li>
                            <li>Area: {area}</li>
                        </StyledUl>
                    </Col>
                </Row>
            </StyledWrapper>
        </Fragment>
    )
}

SelectedCountryModal.propTypes = {
    country: PropTypes.object
}

export default SelectedCountryModal
